import {Component, OnInit} from '@angular/core';

import {DataService} from "../../common/services/data.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'course-number-app',
  templateUrl: './course-number.html',
})
export class CourseNumberComponent {

  searchForm: FormGroup;
  constructor(private dataService: DataService,  private fb: FormBuilder, private  router: Router) {

  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      department: new FormControl(''),
      courseNumber: new FormControl(''),
    });
  }

  submitSearch() {
    this.dataService.emitChange(this.searchForm.value);
  }


}
