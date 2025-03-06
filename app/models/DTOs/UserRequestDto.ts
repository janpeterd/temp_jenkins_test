import type { UserTypeEnum } from "~/enums/userType";
import type { Company } from "../company";

export interface UserRequestDto {
  firstname: string;
  lastname: string;
  email: string;
  wantsDailyQuiz: boolean;
  company?: Company;
  avatarUrl?: string;
  userType: UserTypeEnum;
  password: string;
}
