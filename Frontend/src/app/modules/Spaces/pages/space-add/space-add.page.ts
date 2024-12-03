import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { SpaceService } from '../../services/space.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-space-add',
  templateUrl: './space-add.page.html',
  styleUrls: ['./space-add.page.scss'],
})
export class SpaceAddPage {

  private spaceService = inject(SpaceService);
  private fb = inject(FormBuilder);
  private alertController = inject(AlertController);
  private router = inject(Router);

  formSpace!: FormGroup;
  photo: File | null = null;
  loader: boolean = false;

  ngOnInit() {
    this.formSpace = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      capacity: ['', [Validators.required, Validators.min(1)]],
      photo: [null]
    });
  }

  get invalidName() {
    const control = this.formSpace.get('name');
    return control?.invalid && (control?.dirty || control?.touched);
  }

  get invalidDescripcion() {
    const control = this.formSpace.get('description');
    return control?.invalid && (control?.dirty || control?.touched);
  }

  get invalidCapacity() {
    const control = this.formSpace.get('capacity');
    return control?.invalid && (control?.dirty || control?.touched);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.photo = file;
    }
  }

  async onSubmit() {
    this.loader = true;
    if (this.formSpace.invalid || !this.photo) {
      this.formSpace.markAllAsTouched();
      this.loader = false;
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor complete todos los campos correctamente.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    const formData = new FormData();
    formData.append('name', this.formSpace.get('name')?.value);
    formData.append('description', this.formSpace.get('description')?.value);
    formData.append('capacity', this.formSpace.get('capacity')?.value);

    if (this.photo) {
      formData.append('photo', this.photo, this.photo.name);
    }

    this.spaceService.postData(formData).subscribe({
      next: (response
      ) => {
        this.loader = false;
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        this.loader = false;
        console.error('Error al cargar datos', error);
      }
    });
  }



}
