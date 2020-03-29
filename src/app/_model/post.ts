// import {Comment} from './comment';
// import { Person } from './person';
// import { Like } from './like';
import { Date } from './date';

export interface Post {
  id?: number;
  body?: string;
  perosnId: number;
  likeId: number;
  commentId: number;
  date?: Date;
}
