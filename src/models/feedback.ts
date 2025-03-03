import { Question } from "./question";
import { Quiz } from "./quiz";
import { SimpleUser } from "./simpleUser";

export interface Feedback {
  message: string;
  user: SimpleUser;
  question: Question;
  quiz: Quiz;
  creationDate: Date;
}
