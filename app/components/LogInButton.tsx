import { useAuth } from "~/context/AuthContext";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";
import { LogIn } from "lucide-react";

export default function LogInButton() {
  const { token } = useAuth();
  const navigate = useNavigate();
  return (
    !token && (
      <Button onClick={() => navigate("/login")} variant={"outline"}>
        <LogIn />
        <span>Log In</span>
      </Button>
    )
  );
}
