import { test, expect } from "@playwright/test";
import { UserTypeEnum } from "~/enums/userType";
import type { UserResponseDto } from "~/models/DTOs/UserResponseDto";

const url = "http://localhost:3000";
const getMockUser = (userType: UserTypeEnum) => {
  const user: UserResponseDto = {
    email: "name@example.com",
    firstname: "John",
    lastname: "Doe",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Test.svg/1240px-Test.svg.png",
    userType: userType,
    wantsDailyQuiz: true,
  };
  return user;
};

test("root should redirect to /home", async ({ page }) => {
  await page.goto(`${url}/`);
  expect(page.url()).toContain("/home"); // redirected
});

test("unauthorized user cannot access restricted page", async ({ page }) => {
  await page.goto(`${url}/test`);

  expect(page.url()).toContain("/login"); // redirected
});

test("authorized user can access restricted page", async ({
  page,
  context,
}) => {
  await context.addCookies([
    {
      name: "auth",
      value: Buffer.from(
        JSON.stringify({
          jwt: "fake-token12345",
          user: getMockUser(UserTypeEnum.user),
        }),
      ).toString("base64"),
      domain: "localhost",
      path: "/",
    },
  ]);

  await page.goto(`${url}/test`);

  expect(page.url()).toContain("/test");
});

test("authorized, but wrong role cannot access protected page", async ({
  page,
  context,
}) => {
  await context.addCookies([
    {
      name: "auth",
      value: Buffer.from(
        JSON.stringify({
          jwt: "fake-token12345",
          user: getMockUser(UserTypeEnum.user),
        }),
      ).toString("base64"),
      domain: "localhost",
      path: "/",
    },
  ]);

  await page.goto(`${url}/dashboard`);

  expect(page.url()).toContain("/login"); // redirected
});

test("authorized and correct role can access protected page", async ({
  page,
  context,
}) => {
  await context.addCookies([
    {
      name: "auth",
      value: Buffer.from(
        JSON.stringify({
          jwt: "fake-token12345",
          user: getMockUser(UserTypeEnum.companyClient),
        }),
      ).toString("base64"),
      domain: "localhost",
      path: "/",
    },
  ]);

  await page.goto(`${url}/dashboard`);

  expect(page.url()).toContain("/dashboard");
});
