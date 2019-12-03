import {Injectable} from '@angular/core';

const apiVersion = '/api/v1/';
import {ActivatedRoute, Params, Router} from "@angular/router";

let headers = new Headers({'Content-Type': 'application/json'});
import {HttpResponse, HttpErrorResponse} from '@angular/common/http';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs/Observable';
import {tap, catchError} from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: DataService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({headers: req.headers.set('Authorization', `Bearer ${this.auth.getCookie(window.location.pathname.includes('admin') ? 'adminToken' : 'token')}`)});
    req = req.clone({url: apiVersion + req.url});
    req = req.clone({headers: req.headers.set('Content-Type', 'application/json')});
    return next.handle(req).pipe(
      tap(
        event => this.handleResponse(req, event),
        error => this.handleError(req, error)
      ));
  }

  handleResponse(req: HttpRequest<any>, event) {
    if (event instanceof HttpResponse) {
    }
  }

  handleError(req: HttpRequest<any>, event) {
    console.log(req.url);
    if (event.status === 401) {
      if (window.location.pathname.includes('admin')) {
        this.auth.removeAdminCookie();
        this.router.navigate(['/admin']);
      } else {
        this.auth.removeCookie();
        if(req.url !== '/api/v1/users/me') {
          this.auth.emitLoginChange({});
        }
      }
    }
  }
}
