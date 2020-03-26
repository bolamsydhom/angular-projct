import { Person } from './person';
import { Like } from './like';

export interface Comment {
  id?: number;
  body?: string;
  postId?: number;
  perosn?: Person;
  likes?: Like[];

}
