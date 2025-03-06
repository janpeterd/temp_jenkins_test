import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import type { HTMLAttributes } from "react";
import { Form, useActionData, useNavigation } from "react-router";
import { PasswordInput } from "~/components/PasswordInput";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { cn } from "~/lib/utils";
import { type action } from "../route";
import { z } from "zod";
import { signupSchema } from "~/schemas/RegisterSchema";
import React from "react";

type SignUpFormProps = HTMLAttributes<HTMLFormElement>;

export function SignUpForm({ className, ...props }: SignUpFormProps) {
  const actionData = useActionData<typeof action>();

  const [
    form,
    {
      email,
      firstname,
      lastname,
      password,
      confirmPassword,
      isCompanyUser,
      companyName,
      logoUrl,
    },
  ] = useForm<z.infer<typeof signupSchema>>({
    lastResult: actionData?.lastResult,
    defaultValue: {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      confirmPassword: "",
      isCompanyUser: false,
      companyName: "",
      logoUrl: "",
    },
    onValidate: ({ formData }) =>
      parseWithZod(formData, { schema: signupSchema }),
  });
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";

  return (
    <Form
      method="post"
      {...getFormProps(form)}
      className={cn("grid gap-2", className)}
      {...props}
    >
      <div className="space-y-1">
        <Label htmlFor={email.id}>Email</Label>
        <Input
          {...getInputProps(email, { type: "email" })}
          key={email.id}
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
        <Label htmlFor={firstname.id}>First name</Label>
        <Input
          {...getInputProps(firstname, { type: "text" })}
          key={firstname.id}
          placeholder="John"
        />
        <div
          id={firstname.errorId}
          className="text-destructive text-[0.8rem] font-medium empty:hidden"
        >
          {firstname.errors}
        </div>
      </div>
      <div className="space-y-1">
        <Label htmlFor={lastname.id}>Last name</Label>
        <Input
          {...getInputProps(lastname, { type: "text" })}
          key={lastname.id}
          placeholder="Doe"
        />
        <div
          id={lastname.errorId}
          className="text-destructive text-[0.8rem] font-medium empty:hidden"
        >
          {lastname.errors}
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor={password.id}>Password</Label>
        <PasswordInput
          {...getInputProps(password, { type: "password" })}
          key={password.id}
          placeholder="********"
        />
        <div
          id={password.errorId}
          className="text-destructive text-[0.8rem] font-medium empty:hidden"
        >
          {password.errors}
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor={confirmPassword.id}>Confirm Password</Label>
        <PasswordInput
          {...getInputProps(confirmPassword, { type: "password" })}
          key={confirmPassword.id}
          placeholder="********"
        />
        <div
          id={confirmPassword.errorId}
          className="text-destructive text-[0.8rem] font-medium empty:hidden"
        >
          {confirmPassword.errors}
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor={isCompanyUser.id}>Do you want a company account?</Label>
        <input
          {...getInputProps(isCompanyUser, { type: "checkbox" })}
          key={isCompanyUser.id}
          defaultChecked={isCompanyUser.value === "on"}
        />
        <div
          id={isCompanyUser.errorId}
          className="text-destructive text-[0.8rem] font-medium empty:hidden"
        >
          {isCompanyUser.errors}
        </div>
      </div>

      <div className="space-y-1" hidden={!isCompanyUser.value}>
        <Label htmlFor={companyName.id}>Company Name</Label>
        <Input
          {...getInputProps(companyName, { type: "text" })}
          key={companyName.id}
          placeholder="Your company name"
        />
        <div
          id={companyName.errorId}
          className="text-destructive text-[0.8rem] font-medium empty:hidden"
        >
          {companyName.errors}
        </div>
      </div>
      <div className="space-y-1" hidden={!isCompanyUser.value}>
        <Label htmlFor={logoUrl.id}>Logo</Label>
        <Input
          {...getInputProps(logoUrl, { type: "text" })}
          key={logoUrl.id}
          placeholder="Your Logo"
        />
        <div
          id={logoUrl.errorId}
          className="text-destructive text-[0.8rem] font-medium empty:hidden"
        >
          {logoUrl.errors}
        </div>
      </div>

      {form.errors && (
        <Alert variant="destructive">
          <AlertTitle>There was an error creating your account</AlertTitle>
          <AlertDescription>{form.errors}</AlertDescription>
        </Alert>
      )}

      <Button className="mt-2" disabled={isLoading}>
        Create Account
      </Button>
    </Form>
  );
}
