import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/_service/post.service';
import { Post } from 'src/app/_model/post';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.scss']
})
export class PostListingComponent implements OnInit {
  posts: Post[] = [];
  profileNO = 1;

  constructor(private postservice: PostService) {}

  ngOnInit() {
    if (true) {
      this.posts = this.postservice.getPostsByIdPerson(this.profileNO);
      console.log(this.posts);
    }
    this.postservice.newAdded.subscribe(p => {
      this.posts.unshift(p);
    });
  }
}
