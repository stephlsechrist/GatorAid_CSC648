import {NgModule} from '@angular/core';

import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [

  ],
  providers: [

  ],
  exports: [

  ]
})
export class SharedModule {
}
