import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Post } from '../post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {

  posts?: Post[];
  currentPost?: Post;
  currentIndex = -1;
  title = '';

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.retrievePosts();

  }

  refreshList(): void {
    this.currentPost = undefined;
    this.currentIndex = -1;
    this.retrievePosts();
  }

  retrievePosts(): void {
    this.postsService.getAll().snapshotChanges().pipe(
      map(changes => 
        changes.map(c => 
          ({ id: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(data => {
        this.posts = data;
        for (const i in data) {
          console.log(data[i].id)
        }
      });
  }

  setActivePost(post: Post, index:number): void{
    this.currentPost = post;
    this.currentIndex = index;
  }

  removeAllPosts(): void {
    this.postsService.deleteAll()
    .then(() => this.refreshList())
    .catch(err => console.log(err))
  }
}