import {Component, OnInit} from '@angular/core';

import {DataService} from "../../common/services/data.service";

@Component({
  selector: 'home-app',
  templateUrl: './home.html',
})
export class HomeComponent {

  items: any = [];
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.listItems({}).subscribe((data: any) => {
      this.items = data.items;
    });
  }


}
