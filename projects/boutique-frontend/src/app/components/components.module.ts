import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavcartComponent } from './navcart/navcart.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [NavbarComponent, NavcartComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
