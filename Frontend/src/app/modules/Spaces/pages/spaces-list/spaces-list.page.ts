import { Component, inject, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Platform, RefresherCustomEvent } from '@ionic/angular';
import { Space } from 'src/app/core/interfaces/space.interface';
import { SpaceService } from 'src/app/modules/Spaces/services/space.service';
@Component({
  selector: 'app-spaces-list',
  templateUrl: './spaces-list.page.html',
  styleUrls: ['./spaces-list.page.scss'],
})
export class SpacesListPage implements OnInit  {

  spaces: Space[] = [];
  loader: boolean = false;

  private spaceService = inject(SpaceService);
  private router = inject(Router);

  ngOnInit() {
    this.getSpaces();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/espacios') {
        this.getSpaces();
      }
    });
  }

  refresh(ev: any) {
    setTimeout(() => {
      this.getSpaces();
      (ev as RefresherCustomEvent).detail.complete();
    }, 0);
  }

  getSpaces() {
    this.loader = true;
    this.spaceService.getData().subscribe({
      next: (response
      ) => {
        this.spaces = response;
        this.loader = false;
      },
      error: (error) => {
        this.loader = false;
        console.error('Error al cargar datos', error);
      }
    });
  }

}
