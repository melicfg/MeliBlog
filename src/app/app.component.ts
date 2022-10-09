import { Component, OnInit } from '@angular/core';
import { Astro } from './astro';
import { UserService } from './users/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'project';
  constructor(){}
  ngOnInit(): void {
  } 
}