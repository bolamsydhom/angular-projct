import { Post } from './../_model/post';
// import { Person } from './../_model/person';

export class PostService {
  post: Post[] = [
    // { id: 1, body: 'Hamgfbvfbgvcgbfvcada',  jobDesc: 'Front-End De`veloper', jobTitle: 'Front-End Developer', country: 'Egypt', connections: 5 }
    {
      id: 1,
      body: `ut aspernatur corporis harum nihil quis provident sequi
   \nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo 
    ab reprehenderit accusantium quas\nvoluptate dolores velit et 
    doloremque molestiae`,
      perosnId: 1,
      likeId: 1,
      commentId: 1,
      date: { year: '2019', month: '10', day: '5' }
    }
  ];

  getAll() {
    return this.post.slice();
  }

  getById(id: number) {
    return this.post.find(p => p.id === id);
  }

  update(oldPost: Post, newPost: Post) {
    let index = this.post.findIndex(p => p === oldPost);
    this.post[index] = newPost;
  }

  delete(post: Post) {
    let index = this.post.findIndex(p => p === post);
    this.post.splice(index, 1);
  }

  addPost() {}
}

// { id: 1, body: `quia et suscipit\nsuscipit recusandae consequuntur
// expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum
// rerum est autem sunt rem eveniet architecto`,
//  perosn:{id:1,name:"Leanne Graham",imageUrl:"assets/images/personal.jpg",
//  jobDesc:"Kulas Light",jobTitle:"qui est esse",country:"Egypt",
//  connections:92998-3874} ,
//  likes: [{Person:,post:,comment:}],
//   comments: [id:,body:,postId:,person:,likes:[]],date: }
