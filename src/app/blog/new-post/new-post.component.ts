import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.sass']
})
export class NewPostComponent implements OnInit {

  post: Post = new Post();
  submitted = false;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  savePost(): void {
    this.postsService.create(this.post).then(()=>{
      console.log('Se ha añadido el post');
      this.submitted = true;
    });
  }

  newPost(): void{
    this.submitted = false;
    this.post = new Post();
  }
}
