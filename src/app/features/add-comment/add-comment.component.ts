import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Comment } from './../../_model/comment';
import { CommentService } from 'src/app/_service/comment.service';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/_service/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  comment: Comment = {};
  // post: Post;
  // @Input() postID: number;
  id: number;

  constructor(
    private commentService: CommentService,
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    // this.post = this.postService.getById(this.postID);
  }

  onCommentAdd(form: NgForm) {
    const commentValue = form.value.comment;
    const newcomment: Comment = {
      id: 0,
      body: commentValue,
      postId: 2,
      likeId: 1,
      user: this.id
    };

    console.log(newcomment);
    this.commentService.add(newcomment);
    form.reset();

    const y = this.commentService.getAll();
    console.log(y);
  }
}
