import { Quiz } from "./quiz";

export interface SharedLink {
  linkUrl: string;
  quiz: Quiz;
  name: string;
}
