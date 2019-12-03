import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {WebsiteModule} from './website/website.module';
import {AdminModule} from './admin/admin.module'
import { DataService } from "./common/services/data.service";

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './common/http-interceptor/http.interceptor';
import { GuardService } from "./common/services/guard.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    WebsiteModule,
    AdminModule
  ],
  providers: [DataService, GuardService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
