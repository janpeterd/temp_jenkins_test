import { test, expect } from "@playwright/test";
import { UserTypeEnum } from "~/enums/userType";
import type { UserResponseDto } from "~/models/DTOs/UserResponseDto";

test("root should redirect to /home", async ({ page }) => {
  await page.goto("/");
  expect(page.url()).toContain("/home"); // redirected
});

test("unauthorized user cannot access restricted page", async ({ page }) => {
  await page.goto("http://localhost:5173/test");

  expect(page.url()).toContain("/login"); // redirected
});

// Test for correct access with cookie-based auth
test("authorized user can access restricted page", async ({
  page,
  context,
}) => {
  const user: UserResponseDto = {
    email: "name@example.com",
    firstname: "John",
    lastname: "Doe",
    avatarUrl: "https://randomuser.me/api/portraits",
    userType: UserTypeEnum.user,
    wantsDailyQuiz: true,
  };
  // Approach 2: Mock a user with insufficient permissions
  await context.addCookies([
    {
      name: "auth",
      value: Buffer.from(
        JSON.stringify({
          jwt: "fake-token12345",
          user: user,
        }),
      ).toString("base64"),
      domain: "localhost",
      path: "/",
    },
  ]);

  await page.goto("http://localhost:5173/test");

  expect(page.url()).toContain("/test");
});

test("authorized, but wrong role cannot access protected page", async ({
  page,
  context,
}) => {
  const user: UserResponseDto = {
    email: "name@example.com",
    firstname: "John",
    lastname: "Doe",
    avatarUrl: "https://randomuser.me/api/portraits",
    userType: UserTypeEnum.user,
    wantsDailyQuiz: true,
  };
  await context.addCookies([
    {
      name: "auth",
      value: Buffer.from(
        JSON.stringify({
          jwt: "fake-token12345",
          user: user,
        }),
      ).toString("base64"),
      domain: "localhost",
      path: "/",
    },
  ]);

  await page.goto("http://localhost:5173/dashboard");

  expect(page.url()).toContain("/login"); // redirected
});

test("authorized and correct role can access protected page", async ({
  page,
  context,
}) => {
  const user: UserResponseDto = {
    email: "name@example.com",
    firstname: "John",
    lastname: "Doe",
    avatarUrl: "https://randomuser.me/api/portraits",
    userType: UserTypeEnum.companyClient,
    wantsDailyQuiz: true,
  };
  await context.addCookies([
    {
      name: "auth",
      value: Buffer.from(
        JSON.stringify({
          jwt: "fake-token12345",
          user: user,
        }),
      ).toString("base64"),
      domain: "localhost",
      path: "/",
    },
  ]);

  await page.goto("http://localhost:5173/dashboard");

  expect(page.url()).toContain("/dashboard");
});
