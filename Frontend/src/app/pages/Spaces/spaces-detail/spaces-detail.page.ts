import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { DataService, Message } from 'src/app/services/data.service';

@Component({
  selector: 'app-spaces-detail',
  templateUrl: './spaces-detail.page.html',
  styleUrls: ['./spaces-detail.page.scss'],
})
export class SpacesDetailPage implements OnInit {

  public message!: Message;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  constructor() {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.message = this.data.getMessageById(parseInt(id, 10));
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }

}
