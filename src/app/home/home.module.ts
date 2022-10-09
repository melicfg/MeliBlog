import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { PostsComponent } from '../blog/posts/posts.component';
import { BlogModule } from '../blog/blog.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    BlogModule
  ]
})
export class HomeModule { }
