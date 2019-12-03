import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import {AdminComponent} from './admin.component'
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {SharedModule} from '../common/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './login/login.component';
import {ListItemsComponent} from './list-items/list-items.component';
import {HeaderComponent} from './header/header.component';

import {ViewItemComponent} from './view-item/view-item.component';
import {EditItemComponent} from './edit-item/edit-item.component';
import { UiSwitchModule } from 'ngx-toggle-switch';

@NgModule({
  imports: [
    NgxPaginationModule,
    FormsModule,
    CommonModule,
    NgbModule,
    AdminRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    UiSwitchModule
  ],
  declarations: [
    AdminComponent,
    LoginComponent,
    ListItemsComponent,
    HeaderComponent,
    ViewItemComponent,
    EditItemComponent
  ],
  providers: [
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AdminModule {
}
