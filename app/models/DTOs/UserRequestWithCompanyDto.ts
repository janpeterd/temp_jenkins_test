import type { UserTypeEnum } from "~/enums/userType";

export interface UserRequestDto {
  firstname: string;
  lastname: string;
  email: string;
  wantsDailyQuiz: boolean;
  avatarUrl?: string;
  userType: UserTypeEnum;
  password: string;
  companyName: string;
  logoUrl: string;
}
