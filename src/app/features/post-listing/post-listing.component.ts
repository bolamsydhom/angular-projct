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

  constructor(private postservice: PostService) {}

  ngOnInit() {
    if (this.posts) {
      this.posts = this.postservice.getAll();
      console.log(this.posts);
    }
  }
}
