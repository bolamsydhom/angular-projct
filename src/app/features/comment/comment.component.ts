import { Component, OnInit, Input, Output } from '@angular/core';
import { Comment } from './../../_model/comment';
import { CommentService } from 'src/app/_service/comment.service';
import { Params, ActivatedRoute } from '@angular/router';
import { PersonService } from './../../_service/person.service';
import { Person } from 'src/app/_model/person';

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
  id: number;
  person: Person = {};
  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService,
    private personService: PersonService
  ) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params.id);
    console.log(this.route.snapshot.params.id);
    this.person = this.personService.getById(this.id);
    console.log(this.person);
  }

  // id: number;
  // validPerson = false;
  // ngOnInit(): void {
  //   this.route.params.subscribe(
  //     (params: Params) => {
  //       this.id = +params.id;
  //       this.validPerson = params.id != null;
  //       console.log(this.validPerson);

  //     }
  //   );
  // }

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
