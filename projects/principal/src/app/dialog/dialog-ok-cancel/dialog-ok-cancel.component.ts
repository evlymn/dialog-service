import { OkCancelConfig } from '../dialog-interfaces/ok-cancel-config';
import {
  Component,
  OnInit,
  Inject,
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog-ok-cancel',
  templateUrl: './dialog-ok-cancel.component.html',
  styleUrls: ['./dialog-ok-cancel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogOkCancelComponent implements OnInit, AfterContentChecked {
  titulo = '';
  texto = null;
  tipo = 'text';
  placeholder = '';
  labelOk = 'Ok';
  labelCancel = 'Cancelar';
  controle = new FormControl('');

  constructor(
    private changeDedectionRef: ChangeDetectorRef,
    public dialogRef: MatDialogRef<DialogOkCancelComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: OkCancelConfig
  ) {
    this.preencherModal(data);
  }

  preencherModal(data: OkCancelConfig) {
    this.titulo = data.titulo;
    this.texto = data.texto ? data.texto : this.texto;
    const config = data.inputConfig;
    if (config) {
      this.tipo = config.tipo;
      this.labelOk = config.labelOk ? config.labelOk : this.labelOk;
      this.labelCancel = config.labelCancel ? config.labelCancel : this.labelCancel;
      this.placeholder = config.placeholder ? config.placeholder : this.placeholder;
      if (config.validators) {
        this.controle.setValidators(config.validators);
      }
    }
  }

  ngOnInit() {}

  ngAfterContentChecked(): void {
    this.changeDedectionRef.detectChanges();
  }
}
