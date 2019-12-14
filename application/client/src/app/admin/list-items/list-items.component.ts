import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

import {DataService} from "../../common/services/data.service";
import {FormControl, FormGroup} from '@angular/forms';
import {FormArray, FormBuilder, Validators} from '@angular/forms';

@Component({
  templateUrl: './list-items.html',
})
export class ListItemsComponent implements OnInit {

  filters: any = {
    offset: 0,
    limit: 10,
    itemsPerPage: 10
  };
  count: any = 0;
  page: number = 1;
  isLoading: any = false;
  items: any = [];
  constructor(private dataService: DataService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.isLoading = true;
    this.dataService.listItemsAdmin(this.filters).subscribe((res: any) => {
      this.items = res.items;
      this.count = res.count;
      this.isLoading = false;
    });
  }

  changePage(page: number) {
    this.filters.offset = (page - 1) * this.filters.limit;
    this.page = page;
    this.init();
  }

  changeProductStatus(val: any, item: any) {
    item.isActive = val;
    this.dataService.updateItem(item).subscribe();
  }

}
