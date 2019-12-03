import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ListItemsComponent} from './list-items/list-items.component';
import {HeaderComponent} from './header/header.component';

import {ViewItemComponent} from './view-item/view-item.component';
import {EditItemComponent} from './edit-item/edit-item.component';
import {GuardService} from '../common/services/guard.service';

const routes: Routes = [
  {
    path: 'admin',
    component: LoginComponent
  }
  ,
  {
    path: 'admin/list-items',
    component: ListItemsComponent,
    canActivate: [GuardService]
  }
  ,
  {
    path: 'admin/view-item/:id',
    component: ViewItemComponent,
    canActivate: [GuardService]
  }
  ,
  {
    path: 'admin/edit-item/:id',
    component: EditItemComponent,
    canActivate: [GuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule {
}
