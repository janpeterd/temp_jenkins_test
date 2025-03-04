import { Question } from "./question";
import { Quiz } from "./quiz";

export interface QuizQuestion {
  question: Question;
  quiz: Quiz;
  weightScore: number;
}
