import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogSimplesComponent } from './dialog-simples/dialog-simples.component';
import { DialogOkCancelComponent } from './dialog-ok-cancel/dialog-ok-cancel.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogImageCropComponent } from './dialog-image-crop/dialog-image-crop.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { DialogNotificationComponent } from './dialog-notification/dialog-notification.component';
import { AngularMaterialModules } from '../angular-material.module';

@NgModule({
  declarations: [
    DialogSimplesComponent,
    DialogOkCancelComponent,
    DialogImageCropComponent,
    DialogNotificationComponent
  ],
  imports: [CommonModule, AngularMaterialModules, FormsModule, ReactiveFormsModule, ImageCropperModule],
  exports: [DialogSimplesComponent, DialogOkCancelComponent],
  entryComponents: [
    DialogSimplesComponent,
    DialogOkCancelComponent,
    DialogImageCropComponent,
    DialogNotificationComponent
  ]
})
export class DialogModule {}
