import { Person } from './person';
import { Post } from './post';
import { Comment } from './comment';


export interface Like{
  person?: Person;
  Post?: Post;
  comment?: Comment;
}
