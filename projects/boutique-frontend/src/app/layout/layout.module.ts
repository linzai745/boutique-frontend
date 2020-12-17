import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [LayoutComponent, HomeComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ComponentsModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
