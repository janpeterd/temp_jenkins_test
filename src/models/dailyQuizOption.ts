import { DifficultyEnum } from "@/enums/difficulty";
import { Category } from "./category";

export interface DailyQuizOption {
  category: Category;
  difficulty: DifficultyEnum;
}
