import { Quiz } from "./quiz";
import { SimpleUser } from "./simpleUser";

export interface UserQuiz {
  user: SimpleUser;
  quiz: Quiz;
  startTime: number;
  score: number;
  isPaid: boolean;
}
