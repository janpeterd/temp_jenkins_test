import { AuthContext } from "~/context/AuthContext";
import { Button } from "./ui/button";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { Plus } from "lucide-react";

export default function SignUpButton() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    !token && (
      <Button onClick={() => navigate("/sign-up")} variant={"outline"}>
        <Plus />
        <span>Sign up</span>
      </Button>
    )
  );
}
