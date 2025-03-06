import { api } from "./apiInstance";
import type { LogInData } from "~/models/auth/logInData";
import type { SignUpData } from "~/models/auth/signUpData";

export const login = async (loginData: LogInData) => {
  await api.post("/auth/login", loginData);
};

export const signUp = async (signUpdata: SignUpData) => {
  await api.post("/auth/sign-up", signUpdata);
};

export const logout = async () => {
  await api.post("/auth/logout");
};
