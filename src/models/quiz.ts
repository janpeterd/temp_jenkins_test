import { DifficultyEnum } from "@/enums/difficulty";
import { Category } from "./category";
import { SimpleUser } from "./simpleUser";

export interface Quiz {
  user: SimpleUser;
  name: string;
  creationDate: Date;
  category: Category;
  actualPrice: number;
  isPrivate: boolean;
  photoUrl: string;
  showInstantResult: boolean;
  calculateScore: boolean;
  attempts: number;
  dateScoreRelease: Date;
  description: string;
  isVisible: boolean;
  difficulty: DifficultyEnum;
  isDailyQuiz: boolean;
}
