import { Comment } from './../_model/comment';

export class CommentService {
  comment: Comment[] = [
    { id: 1, body: 'eum et est occaecati', postId: 1, likeId: 1 }
  ];
  getAll() {
    return this.comment.slice();
  }

  getById(id: number) {
    return this.comment.find(p => p.id === id);
  }

  update(oldcomment: Comment, newcomment: Comment) {
    let index = this.comment.findIndex(p => p === oldcomment);
    this.comment[index] = newcomment;
  }

  delete(comment: Comment) {
    let index = this.comment.findIndex(p => p === comment);
    this.comment.splice(index, 1);
  }

  addComment() {}
}
