import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-notification',
  templateUrl: './dialog-notification.component.html',
  styleUrls: ['./dialog-notification.component.scss']
})
export class DialogNotificationComponent implements OnInit {
  titulo = '';
  texto = '';
  constructor(public dialogRef: MatDialogRef<DialogNotificationComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.titulo = data.titulo;
    this.texto = data.texto;
  }

  ngOnInit() {}
}
