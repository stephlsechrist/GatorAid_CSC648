import {Component, OnInit} from '@angular/core';
import {DataService} from "../../common/services/data.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'message-seller-app',
  templateUrl: './message-seller.html',
})
export class MessageSellerComponent {


  item: any = {};
  isLoading: boolean = false;
  messageForm: FormGroup;

  constructor(private route: ActivatedRoute, private  router: Router, private dataService: DataService, private modalService: NgbModal, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.messageForm = this.fb.group({
      title: new FormControl(''),
      message: new FormControl(''),
      receiverId: new FormControl(''),
      itemId: new FormControl('')
    });
    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.dataService.getItemById(params['itemId']).subscribe((item: any) => {
        this.item = item;
        this.isLoading = false;
        this.messageForm.patchValue({itemId: item.id, receiverId: item.userId})
      });
    });
  }

  sendMsg() {
    this.isLoading = true;
    this.dataService.sendMsg(this.messageForm.value).subscribe((res: any) =>{
      this.isLoading = false;
      this.router.navigate(['/view-item', this.item.id]);
    }, () =>{
      this.isLoading = false;
    });
  }

}
