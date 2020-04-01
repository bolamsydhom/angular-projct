import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Comment } from './../../_model/comment';
import { CommentService } from 'src/app/_service/comment.service';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/_model/post';
import { PostService } from 'src/app/_service/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  comment: Comment = {};
  // post: Post;
  // @Input() postID: number;

  constructor(
    private router: Router,
    private commentService: CommentService,
    private postService: PostService
  ) {}

  ngOnInit() {
    // this.post = this.postService.getById(this.postID);
  }

  onCommentAdd(form: NgForm) {
    const commentValue = form.value.comment;
    const newcomment: Comment = {
      id: 0,
      body: commentValue,
      postId: 2,
      likeId: 1,
      user: 5
    };

    console.log(newcomment);
    this.commentService.add(newcomment);
    form.reset();

    const y = this.commentService.getAll();
    console.log(y);
  }
}
