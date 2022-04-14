import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMVPComponent } from './modal-mvp.component';

describe('ModalMVPComponent', () => {
  let component: ModalMVPComponent;
  let fixture: ComponentFixture<ModalMVPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalMVPComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMVPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
