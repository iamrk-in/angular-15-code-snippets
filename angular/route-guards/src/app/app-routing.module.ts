import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserGuard } from './user.guard';
import { UserExitGuard } from './user-exit.guard';
import { UserResolver } from './user.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  // { path: 'user', canActivate: [UserGuard], component: UserComponent }
  // { path: 'user', canDeactivate: [UserExitGuard], component: UserComponent }
  { path: 'user', component: UserComponent, resolve: { message: UserResolver} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
