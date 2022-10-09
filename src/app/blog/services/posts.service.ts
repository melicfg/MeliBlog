import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../post.model';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private dbPath = '/posts'
  postsRef: AngularFireList<Post>;

  constructor(private db: AngularFireDatabase){
    this.postsRef = db.list(this.dbPath)
  }

  getAll(): AngularFireList<Post>{
    console.log(this.postsRef)
    return this.postsRef
  }

  create(post: Post): any {
    return this.postsRef.push(post);
  } 

  update(id: string, value:any): any{
    return this.postsRef.update(id, value);
  }

  delete(id:string): Promise<void> {
    return this.postsRef.remove(id);
  }

  deleteAll(): Promise<void> {
    return this.postsRef.remove();
  }
  // postRef!: AngularFireObject<any>;
   postRef: Observable<any> = this.db.object('post').valueChanges();
   

}
