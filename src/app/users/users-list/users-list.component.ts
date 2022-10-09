import { Component, Input, OnInit } from '@angular/core';
import { User } from '../interfaces/users.interfaces';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent {
  @Input('data') users : User[] = []
  
}
