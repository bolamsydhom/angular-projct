import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './../../_service/post.service';
import { PersonService } from 'src/app/_service/person.service';
import { Person } from 'src/app/_model/person';
import { Post } from 'src/app/_model/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  myPost: string = '';
  person: Person;
  // posts: Post[] = [];
  pAdd: Post;
  @Input()
  profileNO: number;

  constructor(
    private personService: PersonService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.person = this.personService.getById(this.profileNO);
    console.log(this.person);
  }
  setValue() {
    this.pAdd = {
      body: this.myPost,
      perosnId: this.profileNO,
      likeId: 100,
      commentId: 100,
      date: { year: '2000', month: 'June ', day: '12,' }
    };
    this.postService.addPost(this.pAdd);
    // this.posts = this.postService.getPostsByIdPerson(this.profileNO);
    this.postService.newAdded.emit(this.pAdd);
    // console.log(this.posts);
    this.myPost = ' ';
  }
}
