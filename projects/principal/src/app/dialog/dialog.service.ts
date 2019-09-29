import { DialogNotificationComponent } from './dialog-notification/dialog-notification.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogSimplesComponent } from './dialog-simples/dialog-simples.component';
import { DialogOkCancelComponent } from './dialog-ok-cancel/dialog-ok-cancel.component';
import { InputConfig } from './dialog-interfaces/input-confg';
import { ImageConfig } from './dialog-interfaces/image-config';
import { DialogImageCropComponent } from './dialog-image-crop/dialog-image-crop.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  abrirDialogSimples(titulo: string, texto?: string) {
    return this.dialog.open(DialogSimplesComponent, {
      width: '250px',
      data: { titulo, texto },
      hasBackdrop: true,
      panelClass: 'modal-simples-class',
      backdropClass: 'modal-simples-backdrop'
    });
  }

  abrirDialogOkCancel(titulo: string, texto?: string, inputConfig?: InputConfig) {
    return this.dialog.open(DialogOkCancelComponent, {
      width: '250px',
      height: 'auto',
      data: { titulo, texto, inputConfig },
      hasBackdrop: true,
      panelClass: 'modal-ok-cancel-class',
      backdropClass: 'modal-simples-backdrop',
      disableClose: true
    });
  }

  abrirDialogImageCrop(imageConfig: ImageConfig) {
    return this.dialog.open(DialogImageCropComponent, {
      width: '600px',
      height: 'auto',
      data: imageConfig,
      disableClose: true
    });
  }

  abrirDialogNotification(titulo: string, texto?: string) {
    return this.dialog.open(DialogNotificationComponent, {
      width: '100%',
      height: 'auto',
      data: { titulo, texto },
      panelClass: 'notification-dialog',
      position: { top: '0px' },
      disableClose: true
    });
  }
}
