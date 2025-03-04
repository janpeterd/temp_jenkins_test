import { Question } from "./question";

export interface QuestionAnswer {
  answer: string;
  isCorrect: boolean;
  question: Question;
  isCaseSensitive: boolean;
}
