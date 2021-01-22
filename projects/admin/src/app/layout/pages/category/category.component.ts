import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../config/config.service';
import { Category } from './category.interface';
import { Resp } from '../../../resp';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})


export class CategoryComponent implements OnInit {

  constructor(private configService: ConfigService) { }

  categories: Category[] = [];

  ngOnInit(): void {
    this.configService.getConfig()
        .subscribe( (resp: Resp) => {
          this.categories = [...resp.data];
        });

  }

}
