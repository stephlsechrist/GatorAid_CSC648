import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from "rxjs/Observable";


@Injectable()
export class DataService {


  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  // Service message commands
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }

  // Observable string sources
  private emitLoginSource = new Subject<any>();
  // Observable string streams
  loginEmitted$ = this.emitLoginSource.asObservable();
  // Service message commands
  emitLoginChange(change: any) {
    this.emitLoginSource.next(change);
  }

  constructor(private http: HttpClient) {

  }

  addItem(item: any) {
    return this.http.post('items', item);
  }

  listItems(params: any) {
    return this.http.get('items',{params: params});
  }

  forgot(params: any) {
    return this.http.post('users/forgot', params);
  }

  changePassword(params: any) {
    return this.http.post('users/change', params);
  }

  myItems() {
    return this.http.get('users/items');
  }

  getItemById(id: number) {
    return this.http.get(`items/${id}`);
  }

  sendMsg(msg: any) {
    return this.http.post(`messages`, msg);
  }

  listMessages(params: any) {
    return this.http.get(`messages`, {params: params});
  }

  listItemsAdmin(params: any) {
    return this.http.get(`items/admin/list`, {params: params});
  }

  editMsg(msg: any) {
    return this.http.put(`messages/${msg.id}`, msg);
  }

  updateItem(item: any) {
    return this.http.put(`items/${item.id}`, item);
  }

  getCategories() {
    return this.http.get('categories')
  }

  signUp (form: any) {
    return this.http.post('users/signup', form)
  }


  login (form: any) {
    return this.http.post('users/login', form)
  }

  adminLogin (form: any) {
    return this.http.post('users/admin/login', form)
  }

  me () {
    return this.http.get('users/me');
  }

  setCookie(cname: any, cvalue: any, exdays: any) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }

  getCookie(cname: any) {
    const name = cname + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
  }

  removeCookie() {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  removeAdminCookie() {
    document.cookie = 'adminToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
}
