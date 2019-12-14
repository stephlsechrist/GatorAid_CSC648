import {Component} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'admin-app',
  templateUrl: './admin.html',
})
export class AdminComponent {

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
  }

}
