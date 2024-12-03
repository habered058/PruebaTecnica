import { Component, inject, Input, OnInit } from '@angular/core';
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

  ngOnInit() {
    this.getSpaces();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  addSpace(){
    console.log('test')
  }

  getSpaces() {
    this.loader = true;
    this.spaceService.getData().subscribe({
      next: (response
      ) => {
        this.spaces = response;
        this.loader = false;
        console.log('Datos cargados:', response);
      },
      error: (error) => {
        this.loader = false;
        console.error('Error al cargar datos', error);
      }
    });
  }

}
