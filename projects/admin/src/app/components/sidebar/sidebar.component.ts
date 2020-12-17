import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'Home', class: '' },
  { path: '/icons', title: 'Icons',  icon:'Github', class: '' },
  { path: '/maps', title: 'Maps',  icon:'File', class: '' },
  { path: '/user-profile', title: 'Profile',  icon:'Users', class: '' },
  { path: '/tables', title: 'Tables',  icon:'bar-chart2', class: '' },
  { path: '/login', title: 'Login',  icon:'plus-circle', class: '' },
  { path: '/register', title: 'Register',  icon:'shopping-cart', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[] = [];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

}
