import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import {WebsiteComponent} from './website.component'
import {CommonModule} from '@angular/common';
import {WebsiteRoutingModule} from './website.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {SharedModule} from '../common/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {SellComponent} from './sell/sell.component';
import {ViewItemComponent} from './view-item/view-item.component';
import {MessageSellerComponent} from './message-seller/message-seller.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ItemListComponent} from './item-list/item-list.component';
import {MessageListComponent} from './message-list/message-list.component'
import {EditItemComponent} from './edit-item/edit-item.component';
import {SearchComponent} from './search/search.component';
import {CourseNumberComponent} from './course-number/course-number.component';
import {AccountComponent} from './account/account.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    WebsiteRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  declarations: [
    WebsiteComponent,
    HomeComponent,
    HeaderComponent,
    SellComponent,
    MessageSellerComponent,
    ViewItemComponent,
    ItemListComponent,
    MessageListComponent,
    EditItemComponent,
    SearchComponent,
    CourseNumberComponent,
    AccountComponent
  ],
  providers: [
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class WebsiteModule {
}
