import { AuthContext } from "~/context/AuthContext";
import { Button } from "./ui/button";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { LogIn } from "lucide-react";

export default function LogInButton() {
  const { token } = useContext(AuthContext);
  console.log("Token", token);
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
