import { Company } from "./company";
import { Quiz } from "./quiz";
import { SimpleUser } from "./simpleUser";

export interface Invoice {
  user: SimpleUser;
  quiz: Quiz;
  appliedPrice: DoubleRange;
  date: Date;
  company: Company;
  documentUrl: string;
}
