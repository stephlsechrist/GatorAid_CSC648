import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {SellComponent} from './sell/sell.component'

import {ViewItemComponent} from './view-item/view-item.component';
import {MessageSellerComponent} from './message-seller/message-seller.component'

import {ItemListComponent} from './item-list/item-list.component';
import {MessageListComponent} from './message-list/message-list.component';
import {EditItemComponent} from './edit-item/edit-item.component';
import {SearchComponent} from "./search/search.component";
import {WebsiteComponent} from './website.component'
import {CourseNumberComponent} from './course-number/course-number.component';
import {AccountComponent} from './account/account.component';
import {GuardService} from '../common/services/guard.service';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'view-item/:id',
        component: ViewItemComponent
      },
      {
        path: 'add-item',
        component: SellComponent,
      },
      {
        path: 'message-seller/:itemId',
        component: MessageSellerComponent,
      }, {
        path: 'my-messages',
        component: MessageListComponent,
        canActivate: [GuardService]
      },
      {
        path: 'my-items',
        component: ItemListComponent,
        canActivate: [GuardService]
      }
      ,
      {
        path: 'edit-item/:id',
        component: EditItemComponent,
      }
      , {
        path: 'search-items',
        component: SearchComponent
      }
      , {
        path: 'course-number',
        component: CourseNumberComponent
      },
      {
        path: 'manage-account',
        component: AccountComponent,
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class WebsiteRoutingModule {
}
