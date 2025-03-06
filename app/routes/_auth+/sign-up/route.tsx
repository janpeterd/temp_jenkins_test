import { parseWithZod } from "@conform-to/zod";
import { setTimeout } from "node:timers/promises";
import { Link } from "react-router";
import { Card } from "~/components/ui/card";
import type { Route } from "./+types/route";
import { SignUpForm } from "./components/SignUpForm";
import { authCookie } from "~/cookies.server";
import { createUser } from "~/api/users";
import { redirectWithSuccess } from "remix-toast";
import { UserTypeEnum } from "~/enums/userType";
import { signupSchema } from "~/schemas/RegisterSchema";

export const action = async ({ request }: Route.ActionArgs) => {
  const submission = parseWithZod(await request.formData(), {
    schema: signupSchema,
  });
  if (submission.status !== "success") {
    return { lastResult: submission.reply() };
  }

  if (submission.value.email !== "name@example.com") {
    return {
      lastResult: submission.reply({
        formErrors: ["Invalid email or password"],
      }),
    };
  }
  await setTimeout(1000);
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await authCookie.parse(cookieHeader)) || {};
  cookie.jwt = "fake-token12345";
  const user = await createUser({
    ...submission.value,
    userType: submission.value.isCompanyUser
      ? UserTypeEnum.companyClient
      : UserTypeEnum.user,
    wantsDailyQuiz: false,
    company: {
      name: submission.value.companyName || "",
      logoUrl: submission.value.logoUrl || "",
    },
  });
  if (!user) {
    return {
      lastResult: submission.reply({
        formErrors: ["Invalid email or password"],
      }),
    };
  }
  cookie.user = user;

  throw await redirectWithSuccess("/home", "Sucesfully signed up!", {
    headers: {
      "Set-Cookie": await authCookie.serialize(cookie),
    },
  });
};
export default function SignUp() {
  return (
    <Card className="p-6">
      <div className="mb-2 flex flex-col space-y-2 text-left">
        <h1 className="text-lg font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-muted-foreground text-sm">
          Enter your email and password to create an account. <br />
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:text-primary underline underline-offset-4"
          >
            Log In
          </Link>
        </p>
      </div>
      <SignUpForm />
    </Card>
  );
}
