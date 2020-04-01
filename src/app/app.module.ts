import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { PostComponent } from './features/post/post.component';
import { AddPostComponent } from './features/add-post/add-post.component';
import { PostListingComponent } from './features/post-listing/post-listing.component';
import { CommentComponent } from './features/comment/comment.component';
import { CommentListingComponent } from './features/comment-listing/comment-listing.component';
import { AddCommentComponent } from './features/add-comment/add-comment.component';
import { LoginComponent } from './features/login/login.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ProfileComponent } from './features/profile/profile.component';
import { PersonService } from './_service/person.service';
import { NotFounrComponent } from './shared/not-founr/not-founr.component';
import { OthersComponent } from './features/others/others.component';
import {SearchFilterPipe} from './_service/filter-pipe';

const appRoutes: Routes = [

  {
    path: 'Home', children: [
      { path: '', component: NotFounrComponent },
      { path: ':id', component: PostListingComponent }

    ]
  },
  { path: 'Profile',  children:[
    {path: '', component: NotFounrComponent},
    {path: ':id', component: ProfileComponent}

  ] },
  {
    path: 'others', children: [
      { path: ':id', component: OthersComponent }

    ]
  }

];

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    PostComponent,
    AddPostComponent,
    PostListingComponent,
    CommentComponent,
    CommentListingComponent,
    AddCommentComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProfileComponent,
    NotFounrComponent,
    OthersComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
