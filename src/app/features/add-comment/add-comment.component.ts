import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Comment } from './../../_model/comment';
import { CommentService } from 'src/app/_service/comment.service';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/_service/post.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PersonService } from 'src/app/_service/person.service';
import { Person } from 'src/app/_model/person';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Input() postID;
  comment: Comment = {};
  validPerson = false;
  person: Person;
  id: number;

  constructor(
    private commentService: CommentService,
    private personService: PersonService,
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.validPerson = params['id'] != null;
    });
    console.log(this.postID)
    this.person = this.personService.getById(this.id);
    // this.post = this.postService.getById(this.postID);
  }

  onCommentAdd(form: NgForm) {
    const commentValue = form.value.comment;
    const commentID = this.commentService.getAll()[this.commentService.getAll().length - 1].id;
    const newcomment: Comment = {
      id: commentID,
      body: commentValue,
      postId: this.postID,
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
