import { Component, OnInit, Input, Output } from '@angular/core';
import { Comment } from './../../_model/comment';
import { CommentService } from 'src/app/_service/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  // fa = false;
  @Input()
  comment: Comment = {};
  // @Input() userid: number;

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    // this.comment = this.commentService.getById(this.userid);
    // console.log(this.comment.body);
  }
  // getComment() {
  //   if (this.comment.postId === 1) {
  //     return this.comment;
  //   }
  // }

  status: boolean = false;
  likeEvent() {
    this.status = !this.status;
  }
}
