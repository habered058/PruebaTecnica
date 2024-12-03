import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaceAddPageRoutingModule } from './space-add-routing.module';

import { SpaceAddPage } from './space-add.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SpaceAddPageRoutingModule,
    SharedModule
  ],
  declarations: [SpaceAddPage]
})
export class SpaceAddPageModule {}
