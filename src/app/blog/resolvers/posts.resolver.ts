import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../services/posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<Post[]> {

  constructor(private readonly postsService: PostsService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.postsService.getAll().valueChanges();
  }
}