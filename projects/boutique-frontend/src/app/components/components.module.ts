import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavcartComponent } from './navcart/navcart.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [NavbarComponent, NavcartComponent, FooterComponent, LoginComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LoginComponent
  ]
})
export class ComponentsModule { }
