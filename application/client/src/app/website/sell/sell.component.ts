import {Component, OnInit} from '@angular/core';
import {DataService} from "../../common/services/data.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import * as dropzone from 'dropzone';
declare var Dropzone: any;

@Component({
  selector: 'sell-app',
  templateUrl: './sell.html',
})
export class SellComponent {


  categories: any = [];
  itemForm: FormGroup;
  isLoading: boolean = false;
  isSubmitted: boolean = false;
  message: string;
  user: any = {};
  constructor( private  router: Router, private dataService: DataService, private modalService: NgbModal, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.dataService.getCategories().subscribe((categories: any) => {
      this.categories = categories;
    });


    this.itemForm = this.fb.group({
      title: new FormControl(''),
      desc: new FormControl(''),
      categoryId: new FormControl(''),
      price: new FormControl(''),
      picture: new FormControl(''),
    });
    let myDropzonea = new Dropzone("#profile-picture1", {
      maxFiles: 1,
      url: "/api/upload",
      addRemoveLinks: true,
      acceptedFiles: 'image/*',
      timeout:100000000000,
      headers: {
        'Authorization': 'bearer ' + this.dataService.getCookie('token')
      }
    });
    myDropzonea.on("success", (file: any, res: any) => {
      this.message = '';
      this.itemForm.patchValue({picture: res.fileName});
    });
  }

  addItem() {
    this.message = '';
    if(!this.itemForm.value.picture) {
      return this.message = 'Please upload picture';
    }
    this.isLoading = true;
    this.dataService.addItem(this.itemForm.value).subscribe((item:any) => {
      this.isLoading = false;
      this.router.navigate(['/']);
    }, () =>{
      this.isLoading = false;
    })
  }
}
