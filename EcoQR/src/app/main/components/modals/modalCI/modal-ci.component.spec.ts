import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCIComponent } from './modal-ci.component';

describe('ModalMVPComponent', () => {
  let component: ModalCIComponent;
  let fixture: ComponentFixture<ModalCIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCIComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
