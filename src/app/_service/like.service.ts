import { Like } from './../_model/like';
export class LikeService {
  like: Like[] = [
    { id: 1, userId: 1001, postId: 1 },
    { id: 2, userId: 1002, postId: 1 },
    { id: 3, userId: 1003, postId: 2 }
    // { id: 4, userId: 1004, commentId: 1 }
  ];
  getAll(): Like[] {
    return this.like;
  }

  getLikeByPostId(id: number): Like[] {
    return this.like.filter(p => p.postId === id);
  }
  addLike(like: Like) {
    like.id = this.like.length + 1;
    like.userId = this.like.length + 1000;
    // like.postId = postId;
    this.like.push(like);
  }

  delete(like: Like) {
    let index = this.like.findIndex(p => p === like);
    this.like.splice(index, 1);
  }
}
