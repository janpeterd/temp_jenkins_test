import { createContext } from "react";
import type { User } from "~/models/user";

type AuthContextType = {
  user: User | null;
  token: string | null;
};

export const AuthContext = createContext({} as AuthContextType);
