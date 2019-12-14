import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {DataService} from "../../common/services/data.service";

@Component({
  selector: 'search-app',
  templateUrl: './search.html',
})
export class SearchComponent {

  items: any = [];
  count: any = 0;
  filter :any = {};
  isLoading: any = false;
  message:any = '';
  constructor(private dataService: DataService,private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.dataService.changeEmitted$.subscribe(
      data => {
        this.filter = data;
        this.init();
      });
    this.route
      .queryParams
      .subscribe(params => {
        this.filter = params;
        this.init();
      });
  }

  init() {
    this.message = '';
    if(Object.keys(this.filter).length == 0) {
      this.message = 'No search criteria provided.';
    } else {
      this.isLoading = true;
      this.dataService.listItems(this.filter).subscribe((data: any) => {
        this.items = data.items;
        this.count = data.count;
        this.isLoading = false;
        if(data.items.length == 0) {
          this.message = 'No items were found.';
        }
      });
    }
  }

  sortItems(event: any) {
    this.filter.sortBy = event.target.value;
    this.init();
  }


}
