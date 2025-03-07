import { parseWithZod } from "@conform-to/zod";
import { z } from "zod";
import { Card } from "~/components/ui/card";
import type { Route } from "./+types/route";
import { LoginForm } from "./components/LoginForm";
import { authCookie } from "~/cookies.server";
import { getUserByEmail } from "~/api/users";
import { redirectWithSuccess } from "remix-toast";

export const formSchema = z.object({
  email: z
    .string({ required_error: "Please enter your email" })
    .email({ message: "Invalid email address" }),
  password: z.string({ required_error: "Please enter your password" }).min(7, {
    message: "Password must be at least 7 characters long",
  }),
});

export const action = async ({ request }: Route.ActionArgs) => {
  const submission = parseWithZod(await request.formData(), {
    schema: formSchema,
  });

  if (submission.status !== "success") {
    return { lastResult: submission.reply() };
  }

  // This is a fake login, replace this with your own login logic
  if (submission.value.email !== "name@example.com") {
    return {
      lastResult: submission.reply({
        formErrors: ["Invalid email or password"],
      }),
    };
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await authCookie.parse(cookieHeader)) || {};
  cookie.jwt = "fake-token12345";
  const user = await getUserByEmail(submission.value.email);
  if (!user) {
    return {
      lastResult: submission.reply({
        formErrors: ["Invalid email or password"],
      }),
    };
  }
  cookie.user = user;

  throw await redirectWithSuccess("/home", "Successfully Logged In!", {
    headers: {
      "Set-Cookie": await authCookie.serialize(cookie),
    },
  });
};

export default function SignIn() {
  return (
    <Card className="p-6">
      <div className="flex flex-col space-y-2 text-left">
        <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
        <p className="text-muted-foreground text-sm">
          Enter your email and password below <br />
          to log into your account
        </p>
      </div>
      <LoginForm />
    </Card>
  );
}
