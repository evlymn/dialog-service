import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-simples',
  templateUrl: './dialog-simples.component.html',
  styleUrls: ['./dialog-simples.component.scss']
})
export class DialogSimplesComponent implements OnInit {
  titulo = '';
  texto = '';
  constructor(
    public dialogRef: MatDialogRef<DialogSimplesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.texto = data.texto;
    this.titulo = data.titulo;
  }

  sair() {
    this.dialogRef.close();
  }
  ngOnInit() {}
}
