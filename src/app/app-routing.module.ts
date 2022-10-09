import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './users/form/form.component';
import { PostsResolver } from './blog/resolvers/posts.resolver';
import { NewPostComponent } from './blog/new-post/new-post.component';
import { PostComponent } from './blog/post/post.component';
import { RegistroComponent } from './users/registro/registro.component';
import { VerifyComponent } from './users/verify/verify.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, resolve: { data: PostsResolver}
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'publication', component: NewPostComponent
  },
  {
    path: 'login', component: FormComponent
  },
  {
    path: 'home/:id', component: PostComponent
  },
  {
    path: 'usuarios', loadChildren: () => import(`./users/users.module`).then(m=>m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
