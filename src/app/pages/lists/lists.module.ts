import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { ListsPageRoutingModule } from './lists-routing.module';

import { ListsPage } from './lists.page';

const routes: Routes = [
  {
    path: '',
    component: ListsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListsPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListsPage]
})
export class ListsPageModule {}
