import { UserTypeEnum } from "~/enums/userType";
import type { Company } from "./company";

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  wantsDailyQuiz: boolean;
  company: Company;
  userType: UserTypeEnum;
  avatarUrl: string;
}
