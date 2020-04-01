import { Post } from './../_model/post';
import { EventEmitter } from '@angular/core';

export class PostService {
  post: Post[];
  newAdded = new EventEmitter<Post>();
  constructor() {
    this.post = [
      {
        id: 1,
        body: `Streamlined overall programme management functions and accomplished 
        desired goals by controlling cost, utilising resources, motivating teams,
         implementing best practices, and conducting risk analysis.
        Delivered both Hermes iPad and Hermes iPhone native trading 
        products that ranked number one mobile trading downloads in 
        Egypt and UAE during 2014.
        Successfully improved overall products stability and quality
        by automating 80% of the manual test cases of the whole EFG Hermes
        Enterprise Brokerage suite.
        Setup and run EFG IT project management office to effectively 
        manage corporate projects portfolio in standardized process and unified 
        projects’ templates, documents, and tools.`,
        perosnId: 1,
        likeId: 1,
        commentId: 1,
        date: { year: '2020', month: 'July ', day: '2,' }
      },
      {
        id: 2,
        body: `Accomplished and resourceful professional with over
         17 years of experience in supervising and managing entire software
          development and product lifecycle management including Project and 
          Product Management functions within IT and financial services industries.`,
        perosnId: 1,
        likeId: 2,
        commentId: 2,
        date: { year: '2019', month: 'Des ', day: '28,' }
      },
      {
        id: 3,
        body: `3Fulfilled stakeholder’s requirements and ensured on
         time delivery of program by introducing and maintaining an 
         effective project management culture. Managed and executed all aspects 
         of technical works and carried out large-scale enterprise brokerage suite 
         which included web, desktop, mobile, multi-tier technology, SOA services 
         and cloud computing applications. Assessed software program performance to 
         maximize ROI and ensured monthly releases of mission critical EFG Hermes
          Enterprise Brokerage suite, back-office operations, front-office order
           management product, retail trading product, and online clients trading 
           product.`,
        perosnId: 2,
        likeId: 3,
        commentId: 3,
        date: { year: '2019', month: 'June ', day: '17,' }
      },
      {
        id: 4,
        body: `We can navigate this together! ITS Managed Services ensure business continuity through the difficult times with expert IT,Virtualization, Messaging Systems, Storage & Network solutions on a monthly, three monthly or extended basis.
        info@its.ws for help now! At ITS, it’s a Partnership.`,
        perosnId: 2,
        likeId: 3,
        commentId: 1,
        date: { year: '2020', month: 'June ', day: '12,' }
      }
    ];
  }
  getAll(): Post[] {
    return this.post;
  }
  getPostsByIdPerson(id: number): Post[] {
    return this.post.filter(p => p.perosnId === id);
  }

  getById(id: number): Post {
    return this.post.find(p => p.id === id);
  }

  // update(oldPost: Post, newPost: Post) {
  //   let index = this.post.findIndex(p => p === oldPost);
  //   this.post[index] = newPost;
  // }
  update(newPost: Post) {
    let i = this.post.indexOf(this.getById(newPost.id));
    this.post[i] = newPost;
  }

  delete(post: Post) {
    let index = this.post.findIndex(p => p === post);
    this.post.splice(index, 1);
  }

  addPost(post: Post) {
    post.id = this.post.length + 1;
    this.post.unshift(post);
  }
}
