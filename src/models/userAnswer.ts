import { Question } from "./question";
import { QuestionAnswer } from "./questionAnswer";
import { SharedLink } from "./sharedLink";
import { SimpleUser } from "./simpleUser";

export interface UserAnswer {
  answer: string;
  duration: number;
  user: SimpleUser;
  questionAnswer: QuestionAnswer;
  sharedLink: SharedLink;
  question: Question;
  userCode: string;
}
