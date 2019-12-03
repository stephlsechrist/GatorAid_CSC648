import { Component } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'website-app',
  templateUrl: './website.html',
})
export class WebsiteComponent {

  constructor(private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
     console.log("called")
  }

}
