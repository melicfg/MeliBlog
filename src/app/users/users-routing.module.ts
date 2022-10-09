import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  {
    path: '', component: RegistroComponent
  },
  {
    path: 'verify-email-address',component: VerifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class userRoutingModule { }