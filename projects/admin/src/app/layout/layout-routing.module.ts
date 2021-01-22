import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoryComponent } from './pages/category/category.component';


const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "category", component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
