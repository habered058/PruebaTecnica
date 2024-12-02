import { Component, inject, Input, OnInit } from '@angular/core';
import { Platform, RefresherCustomEvent } from '@ionic/angular';
import { DataService, Message } from 'src/app/services/data.service';

@Component({
  selector: 'app-spaces-list',
  templateUrl: './spaces-list.page.html',
  styleUrls: ['./spaces-list.page.scss'],
})
export class SpacesListPage {

  private platform = inject(Platform);
  isIos() {
    return this.platform.is('ios')
  }

  private data = inject(DataService);
  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

}
