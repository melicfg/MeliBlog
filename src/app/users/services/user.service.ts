import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { users } from '../users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dbPath = "/users"
  userRef!: AngularFireList<users>

  
  constructor(private db: AngularFireDatabase) {
    this.userRef = db.list(this.dbPath)
  }

  getAll(): AngularFireList<users>{
    console.log(this.userRef)
    return this.userRef
  }

  create(user: users): any {
    return this.userRef.push(user);
  } 
}
