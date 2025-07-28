import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NgModule} from '@angular/core';
import {Welcome} from './components/welcome/welcome';
import {PostDetailComponent} from './components/post-detail/post-detail.component';
import {DevPostsComponent} from './components/dev-posts/dev-posts.component';
import {LifePostsComponent} from './components/life-posts/life-posts';
import {PostFormComponent} from './components/post-form/post-form.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './services/auth.gurad';
import {AboutMeComponent} from './components/about-me/about-me.component';

export const routes: Routes = [
  { path: 'welcome', component: Welcome },
  { path: 'home', component: HomeComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'dev', component: DevPostsComponent },
  { path: 'life', component: LifePostsComponent },
  { path: 'new', component: PostFormComponent, canActivate: [authGuard] }, // Protected route with authGuard
  { path: 'about', component: AboutMeComponent },
  { path: 'login', component: LoginComponent },
  { path: '' , redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
