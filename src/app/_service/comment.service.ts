import { Comment } from './../_model/comment';

export class CommentService {
  comment: Comment[] = [
    { id: 1, body: 'eum et est occaecati', postId: 1, userId: 1, likeId: 1 },
    { id: 2, body: 'eum et est occaecati', postId: 1, userId: 1, likeId: 1 },
    { id: 2, body: 'eum et est occaecati', postId: 2, userId: 1, likeId: 1 }
  ];
  getAll() {
    return this.comment.slice();
  }

  getByPostId(id: number): Comment[] {
    return this.comment.filter(p => p.postId === id);
  }

  update(oldcomment: Comment, newcomment: Comment) {
    let index = this.comment.findIndex(p => p === oldcomment);
    this.comment[index] = newcomment;
  }

  delete(comment: Comment) {
    let index = this.comment.findIndex(p => p === comment);
    this.comment.splice(index, 1);
  }
  addComment(comment: Comment) {
    comment.id = this.comment.length + 1;
    this.comment.push(comment);
  }
}
