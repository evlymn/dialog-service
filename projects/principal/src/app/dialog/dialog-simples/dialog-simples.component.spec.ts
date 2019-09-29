import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSimplesComponent } from './dialog-simples.component';

describe('ModalSimplesComponent', () => {
  let component: DialogSimplesComponent;
  let fixture: ComponentFixture<DialogSimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
