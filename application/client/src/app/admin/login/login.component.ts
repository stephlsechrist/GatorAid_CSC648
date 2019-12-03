import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

import {DataService} from "../../common/services/data.service";
import {FormControl, FormGroup} from '@angular/forms';
import {FormArray, FormBuilder, Validators} from '@angular/forms';

@Component({
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  isLoading: boolean = false;
  isSubmitted: boolean = false;
  message: string;

  constructor(private dataService: DataService, private fb: FormBuilder, private router: Router) {
    this.userForm = this.fb.group({
      username: new FormControl(''),
      password: new FormControl(''),
    });
    this.userForm
      .setValue({
        username: '',
        password: ''
      });
  }

  ngOnInit() {
    this.dataService.me().subscribe(() => {
      this.router.navigate(['/admin/list-items']);
    });
  }

  login() {
    this.isLoading = true;
    this.message = '';
    this.dataService.adminLogin(this.userForm.value).subscribe((data: any) => {
      this.dataService.setCookie('adminToken', data.token, 15);
      this.isLoading = false;
      this.router.navigate(['/admin/list-items']);
    },(err)=> {
      this.isLoading = false;
      this.message = 'Invalid username or password!';
    });
  }

}
