import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpacesDetailPageRoutingModule } from './spaces-detail-routing.module';

import { SpacesDetailPage } from './spaces-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpacesDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [SpacesDetailPage]
})
export class SpacesDetailPageModule {}
