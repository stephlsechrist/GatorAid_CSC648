import {Component, OnInit} from '@angular/core';
import {DataService} from "../../common/services/data.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'header-app',
  templateUrl: './header.html',
})
export class HeaderComponent {


  categories: any = [];
  loginForm: FormGroup;
  forgotForm: FormGroup;
  signUpForm: FormGroup;
  isLoading: boolean = false;
  isSubmitted: boolean = false;
  isCollapsed: boolean = true;
  message: string;
  user: any = {};
  searchForm: FormGroup;
  loginHandle: any;
  constructor(private dataService: DataService, private  router: Router, private modalService: NgbModal, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.dataService.getCategories().subscribe((categories: any) => {
      this.categories = categories;
    });

    this.signUpForm = this.fb.group({
      email: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      agree: new FormControl(false),
    });

    this.loginForm = this.fb.group({
      username: new FormControl(''),
      password: new FormControl(''),
    });

    this.forgotForm = this.fb.group({
      email: new FormControl('')
    });

    this.searchForm = this.fb.group({
      search: new FormControl(''),
      categoryId: new FormControl(''),
    });

    this.getMe();

    this.dataService.loginEmitted$.subscribe(
      data => {
        this.modalService.open(this.loginHandle);
      });
  }

  assignHandle (loginHandle: any) {
    this.loginHandle = loginHandle;
  }

  open(content: any) {
    this.modalService.open(content);
  }

  signUp(close: any) {
    this.message = '';
    if (this.signUpForm.value.password !== this.signUpForm.value.confirmPassword) {
      this.message = 'Password and Confirm password should match';
    } else if (!this.signUpForm.value.email.includes('@sfsu.edu')) {
      this.message = 'Only @sfsu.edu email is allowed';
    } else if(!this.signUpForm.value.agree) {
      this.message = 'Please accept terms and conditions';
    } else {
      this.isLoading = true;
      this.dataService.signUp(this.signUpForm.value).subscribe((data: any) => {
        this.dataService.setCookie('token', data.token, 15);
        this.user = data.user;
        this.isLoading = false;
        this.signUpForm.reset();
        close();
      }, (error: any) => {
        this.isLoading = false;
        this.message = error.error.msg;
      })
    }
  }

  login(close) {
    this.isLoading = true;
    this.message = '';
    this.dataService.login(this.loginForm.value).subscribe((data: any) => {
      this.dataService.setCookie('token', data.token, 15);
      this.user = data.user;
      this.isLoading = false;
      close();
    }, (error: any) => {
      this.isLoading = false;
      this.message = error.error.msg;
    });
  }

  getMe() {
    this.dataService.me().subscribe((data: any) => {
      this.user = data.user;
    }, (err) => {
      this.dataService.removeCookie();
    })
  }

  logout() {
    this.dataService.removeCookie();
    this.user = {};
  }

  navToSell(content: any) {
    if (!this.dataService.getCookie('token')) {
      this.modalService.open(content);
    } else {
      this.router.navigate(['add-item']);
    }
  }

  submitSearch() {
    this.dataService.emitChange(this.searchForm.value);
    this.router.navigate(['search-items'], {queryParams: this.searchForm.value});
  }

  forgotPassword() {
    this.message = ''
    this.dataService.forgot(this.forgotForm.value).subscribe(() => {
      this.message = 'New password sent to your email';
      setTimeout(() => {
        this.message = '';
      },5000);
    });
  }
}
