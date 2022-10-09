import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{

  constructor(public UserService : UserService){}
  ngOnInit(): void {

  } 

}
