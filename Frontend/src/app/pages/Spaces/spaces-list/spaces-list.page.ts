import { Component, inject, Input, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Message } from 'src/app/services/data.service';

@Component({
  selector: 'app-spaces-list',
  templateUrl: './spaces-list.page.html',
  styleUrls: ['./spaces-list.page.scss'],
})
export class SpacesListPage implements OnInit {

  private platform = inject(Platform);
  @Input() message?: Message;
  isIos() {
    return this.platform.is('ios')
  }

  constructor() { }

  ngOnInit() {
  }

}
