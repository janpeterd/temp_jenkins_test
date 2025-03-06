import { test, expect } from "@playwright/test";
import { UserTypeEnum } from "~/enums/userType";
import type { UserResponseDto } from "~/models/DTOs/UserResponseDto";

//Test should pass
test("root should redirect to /home", async ({ page }) => {
  await page.goto("/");
  expect(page.url()).toContain("/home"); // redirected
});

// Test for unauthorized access with cookie-based auth
test("unauthorized user cannot access restricted page", async ({ page }) => {
  // Navigate to the restricted page
  await page.goto("http://localhost:5173/test");

  // Assert that user is redirected or sees access denied
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

  // Navigate to the restricted page
  await page.goto("http://localhost:5173/test");

  // Assert that user is redirected or sees access denied
  expect(page.url()).toContain("/test"); // redirected
});
