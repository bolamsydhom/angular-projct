import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/_model/post';
import { PersonService } from './../../_service/person.service';
import { Person } from './../../_model/person';
import { Like } from './../../_model/like';
import { LikeService } from './../../_service/like.service';
import { CommentService } from 'src/app/_service/comment.service';
import { Comment } from './../../_model/comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  person: Person;
  comment: Comment[] = [];
  like: Like[] = [];
  isSeeMore = false;
  isLiked = false;
  isCommented = false;
  Clock: any;
  @Input()
  post: Post;
  constructor(
    private personService: PersonService,
    private commentService: CommentService,
    private likeService: LikeService
  ) {}

  ngOnInit() {
    this.Clock = Date.now();
    this.person = this.personService.getById(this.post.perosnId);
    console.log(this.person);
    this.comment = this.commentService.getByPostId(this.post.id);
    // console.log(this.comment);
    this.like = this.likeService.getLikeByPostId(this.post.id);
    // console.log(this.like);
  }

  calcDate() {
    var diff = 0;
    var days = 1000 * 60 * 60 * 24;
    var diff = this.Clock - this.post.date;
    return Math.floor(diff / days);
    // return this.Clock - this.post.date;
  }
  iSgreater() {
    return this.post.body.length > 500 ? true : false;
  }

  Trim() {
    if (this.post.body.length > 5000) {
      return this.post.body.substr(0, 5000);
    }
    return this.post.body;
  }
  seeMore() {
    console.log(this.post.body);
    this.isSeeMore = true;
  }

  likeAdded() {
    this.isLiked = !this.isLiked;
    return this.isLiked ? this.like.length++ : this.like.length--;
  }
  commentAdded() {
    this.isCommented = !this.isCommented;
    if (this.isCommented) {
      this.commentService.addComment({});
      this.comment.length++;
    } else {
      this.comment.length--;
      this.commentService.delete({});
    }
  }
}
