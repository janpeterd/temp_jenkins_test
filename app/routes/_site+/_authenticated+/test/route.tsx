import { useContext } from "react";
import LogOutButton from "~/components/LogOutButton";
import { AuthContext } from "~/context/AuthContext";

export default function Test() {
  const auth = useContext(AuthContext);
  return (
    <div>
      <div className="w-full rounded-xl bg-white p-4">
        <h1>Test {auth.token}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cum
          voluptate ad quasi neque corrupti sed, deserunt distinctio debitis
          iste dicta repellendus sint delectus aut amet, quod possimus
          architecto. Pariatur!
        </p>
        <p>Test</p>
        <LogOutButton />
      </div>
    </div>
  );
}
