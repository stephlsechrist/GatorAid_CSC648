
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../services/data.service';
@Injectable()
export class GuardService implements CanActivate {

  constructor(private router: Router, private cookieService: DataService) { }

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.cookieService.getCookie(window.location.pathname.includes('admin') ? 'adminToken': 'token')) {
      this.router.navigate([window.location.pathname.includes('admin') ? '/admin': '/']);
      return false;
    }
    return new Promise((resolve, reject) => {
      this.cookieService.me().subscribe(() => {
        resolve(true);
      }, () =>{
        reject(false);
      })
    });
  }
}
