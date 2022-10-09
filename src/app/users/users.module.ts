import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { VerifyComponent } from './verify/verify.component';
import { RouterModule } from '@angular/router';
import { userRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
    FormComponent,
    UsersListComponent,
    UsersComponent,
    RegistroComponent,
    VerifyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    userRoutingModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
