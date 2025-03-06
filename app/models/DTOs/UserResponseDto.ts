import type { UserTypeEnum } from "~/enums/userType";
import type { Company } from "../company";

export interface UserResponseDto {
  firstname: string;
  lastname: string;
  email: string;
  wantsDailyQuiz: boolean;
  company?: Company;
  avatarUrl?: string;
  userType: UserTypeEnum;
}
