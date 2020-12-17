import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import { 
          Camera, 
          Heart, 
          Github, 
          File,
          Home,
          Users,
          BarChart2,
          Layers,
          PlusCircle,
          FileText,
          Calendar,
          ShoppingCart,
          Search,
          Bell,
          MessageSquare,
          Sliders,
          User
        } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Camera,
  Heart,
  Github,
  File,
  Home,
  Users,
  BarChart2,
  Layers,
  PlusCircle,
  FileText,
  Calendar,
  ShoppingCart,
  Search,
  Bell,
  MessageSquare,
  Sliders,
  User
};



@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons),
    CommonModule
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
