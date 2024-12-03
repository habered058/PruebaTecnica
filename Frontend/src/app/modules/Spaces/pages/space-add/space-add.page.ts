import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { SpaceService } from '../../services/space.service';

@Component({
  selector: 'app-space-add',
  templateUrl: './space-add.page.html',
  styleUrls: ['./space-add.page.scss'],
})
export class SpaceAddPage {

  private spaceService = inject(SpaceService);
  private fb = inject(FormBuilder);
  private alertController = inject(AlertController);

  formSpace!: FormGroup;
  fotoSeleccionada: File | null = null;

  ngOnInit() {
    this.formSpace = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      capacity: ['', [Validators.required, Validators.min(1)]],
      photo: [null]
    });
  }

  // Getters for easy validation checks
  get nombreInvalido() {
    const control = this.formSpace.get('name');
    return control?.invalid && (control?.dirty || control?.touched);
  }

  get descripcionInvalida() {
    const control = this.formSpace.get('description');
    return control?.invalid && (control?.dirty || control?.touched);
  }

  get cantidadInvalida() {
    const control = this.formSpace.get('capacity');
    return control?.invalid && (control?.dirty || control?.touched);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.fotoSeleccionada = file;
    }
  }

  async onSubmit() {
    if (this.formSpace.invalid || !this.fotoSeleccionada) {
      this.formSpace.markAllAsTouched();
      
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
    
    if (this.fotoSeleccionada) {
      formData.append('photo', this.fotoSeleccionada, this.fotoSeleccionada.name);
    }

    console.log(this.fotoSeleccionada);

      this.spaceService.postData(formData).subscribe({
        next: (response
        ) => {
          console.log('Datos guardados:', response);
        },
        error: (error) => {
          console.error('Error al cargar datos', error);
        }
      });
  }



}
