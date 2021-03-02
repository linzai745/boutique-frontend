import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component'

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '', component: LayoutComponent, children: [{path: '', loadChildren: ()=>import('./layout/layout.module').then(m => m.LayoutModule)}]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegistrationComponent}
  // {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
