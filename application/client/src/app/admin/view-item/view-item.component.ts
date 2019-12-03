import {Component, OnInit} from '@angular/core';
import {DataService} from "../../common/services/data.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'view-item-app',
  templateUrl: './view-item.html',
})
export class ViewItemComponent {


  item: any = {};
  isLoading: boolean = false;
  constructor(private route: ActivatedRoute, private  router: Router, private dataService: DataService, private modalService: NgbModal, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.dataService.getItemById(params['id']).subscribe((item: any) => {
        this.item = item;
        this.isLoading = false;
      });
    });
  }

  markFlag() {
    this.item.isAppropriate = !this.item.isAppropriate;
    this.dataService.updateItem(this.item).subscribe();
  }

}
