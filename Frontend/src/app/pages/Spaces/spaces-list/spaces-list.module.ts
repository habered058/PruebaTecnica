import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpacesListPageRoutingModule } from './spaces-list-routing.module';

import { SpacesListPage } from './spaces-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpacesListPageRoutingModule
  ],
  declarations: [SpacesListPage]
})
export class SpacesListPageModule {}
