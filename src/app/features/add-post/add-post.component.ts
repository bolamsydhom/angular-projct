import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './../../_service/post.service';
import { PersonService } from 'src/app/_service/person.service';
import { Person } from 'src/app/_model/person';
import { Post } from 'src/app/_model/post';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  myPost: string = '';
  person: Person;
  // posts: Post[] = [];
  id: number;
  validPerson = false;
  pAdd: Post;
  @Input()
  profileNO: number;

  constructor(
    private personService: PersonService,
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.validPerson = params['id'] != null;
    });

    this.person = this.personService.getById(this.id);
    console.log(this.person);
  }
  setValue() {
    this.pAdd = {
      body: this.myPost,
      perosnId: this.id,
      likeId: 100,
      commentId: 100,
      date: Date.now()
    };
    this.postService.addPost(this.pAdd);
    // this.posts = this.postService.getPostsByIdPerson(this.profileNO);
    this.postService.newAdded.emit(this.pAdd);
    // console.log(this.posts);
    this.myPost = ' ';
  }
}
