import { useAuth } from "~/context/AuthContext";
import { Button } from "./ui/button";
import { AlertDialogPopup } from "./ConfirmDialog";

export default function LogOutButton() {
  const { token } = useAuth();
  // get form by reference
  const onSubmit = () => {
    const form = document.querySelector("form");
    form?.submit();
  };

  return (
    token && (
      <form method="post" action="/logout">
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
