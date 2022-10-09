import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/users.interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent {
  public users: User [] = []

  addUser = (user: User) => {
    console.log(this.users)
    console.log(user)
    this.users.push(user)
  }
}
