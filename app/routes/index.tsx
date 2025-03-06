import { redirect } from "react-router";

export function loader() {
  // redirect to home
  return redirect("/home");
}
