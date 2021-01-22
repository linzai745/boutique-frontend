import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ComponentsModule
  ],
  exports: [
    RouterModule,
    LayoutComponent
  ]
})
export class LayoutModule { }
