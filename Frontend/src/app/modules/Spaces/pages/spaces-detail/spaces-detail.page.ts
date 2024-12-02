import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Space } from 'src/app/core/interfaces/space.interface';
import { SpaceService } from '../../services/space.service';

@Component({
  selector: 'app-spaces-detail',
  templateUrl: './spaces-detail.page.html',
  styleUrls: ['./spaces-detail.page.scss'],
})
export class SpacesDetailPage implements OnInit {

  public space!: Space;
  private spaceService = inject(SpaceService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  constructor() {}

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getSpace(id)
  }

  getSpace(id:number){
    this.spaceService.getDataById(id).subscribe({
      next: (response
      ) => {
        this.space = response;
        console.log('Datos cargados:', response);
      },
      error: (error) => {
        console.error('Error al cargar datos', error);
      }
    });
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Espacios' : '';
  }

}
