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


  constructor(private dataService: DataService, private  router: Router, private modalService: NgbModal, private fb: FormBuilder) {

  }

  ngOnInit() {

  }

  logout() {
    this.dataService.removeAdminCookie();
    this.router.navigate(['/admin']);
  }


}
