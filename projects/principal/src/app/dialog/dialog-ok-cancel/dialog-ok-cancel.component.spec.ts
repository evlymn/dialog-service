import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOkCancelComponent } from './dialog-ok-cancel.component';

describe('ModalOkCancelComponent', () => {
  let component: DialogOkCancelComponent;
  let fixture: ComponentFixture<DialogOkCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOkCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOkCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
