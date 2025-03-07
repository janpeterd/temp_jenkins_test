import { useAuth } from "~/context/AuthContext";
import { Button } from "./ui/button";
import { AlertDialogPopup } from "./ConfirmDialog";
import React from "react";

export default function LogOutButton() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const { token } = useAuth();
  const onSubmit = () => {
    const form = formRef.current;
    form?.submit();
  };

  return (
    token && (
      <form method="post" action="/logout" ref={formRef}>
        <AlertDialogPopup
          title="Log out"
          description="Are you sure you want to log out?"
          confirmText="Log out"
          onSubmit={onSubmit}
        >
          <Button variant={"outline"}>Log out</Button>
        </AlertDialogPopup>
      </form>
    )
  );
}
