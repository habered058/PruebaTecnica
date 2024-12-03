import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpacesListPageRoutingModule } from './spaces-list-routing.module';

import { SpacesListPage } from './spaces-list.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpacesListPageRoutingModule,
    SharedModule
  ],
  declarations: [SpacesListPage]
})
export class SpacesListPageModule {}
