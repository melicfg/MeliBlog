import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Post } from '../../interfaces/posts';
import { Postd } from './post-detail.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  post!: any;

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostsService) { }

  ngOnInit(): void {
    this.retrievePost()
  }

  retrievePost(): void {
    this.activatedRoute.params.subscribe( ({ id }) => {
      this.postService.getAll().snapshotChanges().pipe(
      map(changes => 
        changes.map(c => 
          ({ id: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(data => {
        for (const i in data){
          if (id == data[i].id){
            this.post = data[i]
          } else {
            this.post = data[0]
          }
        }
        console.log(this.post)
      });
    })
  }
}
