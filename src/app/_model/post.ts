import {Comment} from './comment';
import { Person } from './person';
import { Like } from './like';


export interface Post{
  id?: number;
  body?: string;
  perosn?: Person;
  likes?: Like[];
  comments?: Comment[];
  date?: Date;
}
