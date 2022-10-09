import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { User } from '../interfaces/users.interfaces';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { users } from '../users.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit{
  title : string = "Registrar"

  userForm! : FormGroup


  user: users = new users();
  submitted = false

  constructor(private readonly formBuilder : FormBuilder, 
              private usersService: UserService,
              public authService: AuthService){}

  ngOnInit(): void {
      this.userForm = this.initForm()
  }
  
  initForm() : FormGroup{
    return this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  saveUser(): void {
    console.log(this.userForm.value)
    this.usersService.create(this.userForm.value).then(()=>{
      console.log('Se ha registrado');
      console.log(this.user)
      this.submitted = true;
      this.userForm.reset()
    });
  }

  newPost(): void{
    this.submitted = false;
    this.user = new users();
  }
}

