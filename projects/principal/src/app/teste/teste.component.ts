import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DialogService } from '../dialog/dialog.service';
import { Validators } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {
  @ViewChild('inputFile', null) inputFile: ElementRef;

  dialogSimples = '';
  okCancel = '';
  okCancelInputText = '';
  notification = '';
  imagem = null;
  constructor(private dialogService: DialogService) {}

  abrirDialogSimples() {
    this.dialogService
      .abrirDialogSimples('Eu sou o título', 'Eu sou um texto não obrigátório')
      .afterClosed()
      .subscribe(() => {
        this.dialogSimples = 'dialog simples foi fechada';
        console.log('dialog simples foi fechada');
      });
  }

  abrirDialogOkCancel() {
    this.dialogService
      .abrirDialogOkCancel('Eu sou o título', 'Eu sou um texto não obrigátório')
      .afterClosed()
      .subscribe(resultado => {
        this.okCancel = resultado;
        console.log(resultado);
      });
  }

  abrirDialogOkCancelComInputText() {
    this.dialogService
      .abrirDialogOkCancel('Informe seu email', 'Um email será enviado', {
        tipo: 'email',
        placeholder: 'email*',
        validators: [Validators.email, Validators.required],
        labelOk: 'Enviar'
      })
      .afterClosed()
      .subscribe(resultado => {
        this.okCancelInputText = resultado;
        console.log(resultado);
      });
  }

  abrirDialogNotification() {
    this.dialogService
      .abrirDialogNotification('Eu sou uma notificação', 'Eu sou um texto não obrigátório')
      .afterClosed()
      .subscribe(resultado => {
        this.notification = 'Notificação foi fechada';
        console.log(resultado);
      });
  }

  fileChangeEvent(event: Event) {
    this.abrirDialogImageCrop(event);
  }

  abrirDialogImageCrop(event: Event) {
    this.dialogService
      .abrirDialogImageCrop({
        titulo: 'Recorte a imagem do seu avatar',
        event,
        aspectRatio: 6 / 4
      })
      .afterClosed()
      .subscribe((data: ImageCroppedEvent) => {
        if (data) {
          this.imagem = data.base64;
        }
        this.inputFile.nativeElement.value = null;
        console.log('Imagem crop foi fechada');
      });
  }

  abrirInputFile() {
    this.inputFile.nativeElement.click();
  }

  ngOnInit() {}
}
