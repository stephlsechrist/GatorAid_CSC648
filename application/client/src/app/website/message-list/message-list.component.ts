import {Component, OnInit} from '@angular/core';
import {DataService} from "../../common/services/data.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'message-list-app',
  templateUrl: './message-list.html',
})
export class MessageListComponent {

  messageForm: FormGroup;
  msgs: any = [];
  sortBy: any = { sort: 'createdAt' };
  isLoading: boolean = false;
  timerId: any = 0;
  me: any = {};
  constructor(private route: ActivatedRoute, private  router: Router, private dataService: DataService, private modalService: NgbModal, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.isLoading = true;
    this.init();
    this.messageForm = this.fb.group({
      title: new FormControl(''),
      message: new FormControl(''),
      status: new FormControl(''),
      senderId: new FormControl(''),
      receiverId: new FormControl(''),
      itemId: new FormControl(''),
    });
    this.timerId = setInterval( () =>{
      this.init();
    }, 5000);
    this.dataService.me().subscribe((data: any) => {
      this.me = data.user;
    }, (err) => {
    })
  }

  init() {
    this.isLoading = true;
    this.dataService.listMessages(this.sortBy).subscribe((msgs: any) => {
      this.msgs = msgs;
      this.isLoading = false;
    })
  }

  sort(event) {
    this.sortBy = { sort: event.target.value };
    this.init();
  }

  open(content: any, msg: any) {
    this.messageForm.patchValue(msg);
    this.messageForm.patchValue({title: '', message: ''});
    this.modalService.open(content);
  }

  editMsg(c: any) {
    c();
    this.dataService.sendMsg(this.messageForm.value).subscribe(()=>{
      this.init();
    });
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }

}
