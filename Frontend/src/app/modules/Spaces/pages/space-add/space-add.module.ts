import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaceAddPageRoutingModule } from './space-add-routing.module';

import { SpaceAddPage } from './space-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SpaceAddPageRoutingModule
  ],
  declarations: [SpaceAddPage]
})
export class SpaceAddPageModule {}
