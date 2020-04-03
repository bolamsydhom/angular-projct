import { EventEmitter } from '@angular/core';
import { Comment } from './../_model/comment';

export class CommentService {
  commentChanged = new EventEmitter<Comment[]>();
  comments: Comment[] = [
    {
      id: 1,
      body: 'eum et est occaecati',
      postId: 1,
      likeId: 1,
      user: 4
    },
    {
      id: 2,
      body: 'ffffffffffffffffffff',
      postId: 2,
      likeId: 1,
      user: 5
    },
    {
      id: 3,
      body: 'kkkkkkkkkkkkkkkkkkkkkk',
      postId: 1,
      likeId: 1,
      user: 1
    },
    {
      id: 4,
      body: 'mmmmmmmmmmmmmmmmmmmmmmm',
      postId: 2,
      likeId: 1,
      user: 3
    },
    {
      id: 5,
      body: 'ezzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      postId: 1,
      likeId: 1,
      user: 3
    },
    {
      id: 6,
      body: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyy',
      postId: 2,
      likeId: 1,
      user: 1
    }
  ];

  getAll() {
    return this.comments.slice();
  }
  getCommentByPosId(id: number): Comment[] {
    return this.comments.filter(p => p.postId == id);
  }
  getById(id: number) {
    return this.comments.find(p => p.id === id);
  }

  update(oldcomment: Comment, newcomment: Comment) {
    const index = this.comments.findIndex(p => p === oldcomment);
    this.comments[index] = newcomment;
  }

  delete(comment: Comment) {
    const index = this.comments.findIndex(p => p === comment);
    this.comments.splice(index, 1);
  }

  add(comment: Comment) {
    comment.id = this.comments.length + 1;
    this.comments.push(comment);
    // this.comments.unshift(comment);
    this.commentChanged.emit(this.comments.slice());
  }
}
