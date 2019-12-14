import {Component, OnInit} from '@angular/core';
import {DataService} from "../../common/services/data.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import * as dropzone from 'dropzone';
declare var Dropzone: any;

@Component({
  selector: 'edit-item-app',
  templateUrl: './edit-item.html',
})
export class EditItemComponent {


  categories: any = [];
  itemForm: FormGroup;
  isLoading: boolean = false;
  isSubmitted: boolean = false;
  message: string;
  item: any = {};
  constructor(private route: ActivatedRoute, private  router: Router,  private dataService: DataService, private modalService: NgbModal, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.dataService.getCategories().subscribe((categories: any) => {
      this.categories = categories;
    });


    this.itemForm = this.fb.group({
      title: new FormControl(''),
      isActive: new FormControl(''),
      desc: new FormControl(''),
      categoryId: new FormControl(''),
      price: new FormControl(''),
      picture: new FormControl(''),
      id: new FormControl(''),
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
      this.itemForm.patchValue({picture: res.fileName});
    });

    this.route.params.subscribe(params => {
      this.dataService.getItemById(params['id']).subscribe((item: any) => {
        this.item = item;
        this.isLoading = false;
        this.itemForm.patchValue(item);
      });
    });
  }

  editItem() {
    this.isLoading = true;
    this.dataService.updateItem(this.itemForm.value).subscribe((item:any) => {
      this.isLoading = false;
      this.router.navigate(['/admin/view-item/'+this.itemForm.value.id]);
    })
  }
}
