import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { NewPostComponent } from './new-post/new-post.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    NewPostComponent
  ],
  exports: [PostsComponent, PostComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class BlogModule { }
