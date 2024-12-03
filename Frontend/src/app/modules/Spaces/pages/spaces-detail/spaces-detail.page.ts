import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Space } from 'src/app/core/interfaces/space.interface';
import { SpaceService } from '../../services/space.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-spaces-detail',
  templateUrl: './spaces-detail.page.html',
  styleUrls: ['./spaces-detail.page.scss'],
})
export class SpacesDetailPage implements OnInit {

  public space!: Space;
  loader:boolean= false;
  private spaceService = inject(SpaceService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  baseUrl = environment.BaseUrl;

  constructor() {}

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getSpace(id)
  }

  getSpace(id:number){
    this.loader = true;
    this.spaceService.getDataById(id).subscribe({
      next: (response
      ) => {
        this.space = response;
        this.loader = false;
        console.log('Datos cargados:', response);
      },
      error: (error) => {
        this.loader = false;
        console.error('Error al cargar datos', error);
      }
    });
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Espacios' : '';
  }

}
