import {Component, OnInit} from '@angular/core';

import {DataService} from "../../common/services/data.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'account-app',
  templateUrl: './account.html',
})
export class AccountComponent {

  userForm: FormGroup;
  message: any = '';
  constructor(private dataService: DataService,  private fb: FormBuilder, private  router: Router) {

  }

  ngOnInit() {
    this.userForm = this.fb.group({
      currentPassword: new FormControl(''),
      newPassword: new FormControl(''),
    });
  }

  save(){
    this.dataService.changePassword(this.userForm.value).subscribe((res: any) => {
      this.message = res.msg;
    }, (err: any) => {
      this.message = err.error.msg;
    });
  }


}
