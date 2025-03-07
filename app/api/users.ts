import { api } from "./apiInstance";
import type { UserResponseDto } from "~/models/DTOs/UserResponseDto";
import { UserTypeEnum } from "~/enums/userType";
import type { UserRequestDto } from "~/models/DTOs/UserRequestDto";

export const getUsers = async () => {
  return await api.get("/users");
};

export const getUserByEmail = async (email: string) => {
  // return await api.get(`/users/${email}`);
  // mock response
  setTimeout(() => {}, 1000);
  const user: UserResponseDto = {
    email,
    firstname: "John",
    lastname: "Doe",
    avatarUrl: "https://randomuser.me/api/portraits",
    userType: UserTypeEnum.user,
    wantsDailyQuiz: true,
  };
  return user;
};

export const createUser = async (user: UserRequestDto) => {
  return user; // mock response temporary
  // return await api.post("/users", user);
};
