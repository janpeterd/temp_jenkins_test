import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import type { HTMLAttributes } from "react";
import { Form, Link, useActionData, useNavigation } from "react-router";
import { PasswordInput } from "~/components/PasswordInput";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { cn } from "~/lib/utils";
import { type action, formSchema } from "../route";

type UserAuthFormProps = HTMLAttributes<HTMLFormElement>;

export function LoginForm({ className, ...props }: UserAuthFormProps) {
  const actionData = useActionData<typeof action>();
  const [form, { email, password }] = useForm({
    lastResult: actionData?.lastResult,
    defaultValue: {
      email: "",
      password: "",
    },
    onValidate: ({ formData }) =>
      parseWithZod(formData, { schema: formSchema }),
  });
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";

  return (
    <Form
      method="POST"
      {...getFormProps(form)}
      className={cn("grid gap-2", className)}
      {...props}
    >
      <div className="space-y-1">
        <Label htmlFor={email.id}>Email</Label>
        <Input
          {...getInputProps(email, { type: "email" })}
          key={email.key}
          placeholder="name@example.com"
        />
        <div
          id={email.errorId}
          className="text-destructive text-[0.8rem] font-medium empty:hidden"
        >
          {email.errors}
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <Label htmlFor={password.id}>Password</Label>
          <Link
            to="/forgot-password"
            className="text-muted-foreground text-sm font-medium hover:opacity-75"
          >
            Forgot password?
          </Link>
        </div>
        <PasswordInput
          {...getInputProps(password, { type: "password" })}
          key={password.key}
          placeholder="********"
        />
        <div
          id={password.errorId}
          className="text-destructive text-[0.8rem] font-medium empty:hidden"
        >
          {password.errors}
        </div>
      </div>

      {form.errors && (
        <Alert variant="destructive">
          <AlertTitle>Login Error</AlertTitle>
          <AlertDescription>{form.errors}</AlertDescription>
        </Alert>
      )}

      <Button className="mt-2" disabled={isLoading}>
        Login
      </Button>
    </Form>
  );
}
