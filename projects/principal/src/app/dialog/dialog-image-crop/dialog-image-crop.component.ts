import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ImageConfig } from '../dialog-interfaces/image-config';

@Component({
  selector: 'app-dialog-image-crop',
  templateUrl: './dialog-image-crop.component.html',
  styleUrls: ['./dialog-image-crop.component.scss']
})
export class DialogImageCropComponent implements OnInit {

  croppedImageEvent: ImageCroppedEvent;
  constructor(
    public dialogRef: MatDialogRef<DialogImageCropComponent>,
    @Inject(MAT_DIALOG_DATA) public imageConfig: ImageConfig
  ) {}

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImageEvent = event;
  }

  imageLoaded() {
    console.log('imagem carregada');
  }
  loadImageFailed() {
    console.log('falha na imagem');
  }

  ngOnInit() {}
}
