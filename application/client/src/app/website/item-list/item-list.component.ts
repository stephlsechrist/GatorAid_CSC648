import {Component, OnInit} from '@angular/core';
import {DataService} from "../../common/services/data.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'item-list-app',
  templateUrl: './item-list.html',
})
export class ItemListComponent {
  items: any = [];
  isLoading: boolean = false;

  constructor(private route: ActivatedRoute, private  router: Router, private dataService: DataService, private modalService: NgbModal, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.isLoading = true;
    this.dataService.myItems().subscribe((items: any) => {
      this.isLoading = false;
      this.items = items;
    })
  }

}
