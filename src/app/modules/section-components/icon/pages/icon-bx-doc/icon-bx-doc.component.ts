import { Component, OnInit } from '@angular/core';
import { EnumBoxIcons } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'app-icon-bx-doc',
  templateUrl: './icon-bx-doc.component.html',
  styleUrls: ['./icon-bx-doc.component.scss'],
})
export class IconBxDocComponent implements OnInit {
  constructor() {}
  public boxicons = EnumBoxIcons;
  public regularBoxicons: string[] = [];
  public solidBoxicons: string[] = [];
  public logoBoxicons: string[] = [];

  filterArrays(obj: { [key: string]: string }): void {
    Object.values(obj).forEach((value) => {
      if (value.includes('bxs')) {
        this.solidBoxicons.push(value);
      } else if (value.includes('bxl')) {
        this.logoBoxicons.push(value);
      } else {
        this.regularBoxicons.push(value);
      }
    });
  }

  ngOnInit() {
    this.filterArrays(this.boxicons);
  }
}
