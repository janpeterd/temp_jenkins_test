import { UserTypeEnum } from "@/enums/userType";
import { Company } from "./company";

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  wantsDailyQuiz: boolean;
  company: Company;
  userType: UserTypeEnum;
}
