import { DifficultyEnum } from "@/enums/difficulty";
import { Category } from "./category";
import { SimpleUser } from "./simpleUser";
import { QuestionTypeEnum } from "@/enums/questionType";

export interface Question {
  questionType: QuestionTypeEnum;
  question: string;
  category: Category;
  user: SimpleUser;
  creationDate: Date;
  difficulty: DifficultyEnum;
}
