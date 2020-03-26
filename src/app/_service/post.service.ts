
import { Post } from './../_model/post';

export class PersonService {
  post: Post[] = [
    { id: 1, body: 'Hamgfbvfbgvcgbfvcada',  jobDesc: 'Front-End Developer', jobTitle: 'Front-End Developer', country: 'Egypt', connections: 5 }
  ];

  getAll() {
    return this.post.slice();
  }

  getById(id: number) {
    return this.post.find(p => p.id === id);
  }

  update(oldPost: Post, newPost: Post) {
    let index = this.post.findIndex(p => p === oldPost);
    this.post[index] = newPost;
  }


  delete(post: Post) {
    let index = this.post.findIndex(p => p === post);
    this.post.splice(index, 1);
  }

  addPost(){

  }
}
