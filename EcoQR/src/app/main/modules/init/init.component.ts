import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swiper from 'swiper';
import { MODAL_TO_UP } from '../../shared/library/modals';
import { listPatterns } from '../../shared/patterns/pattern.library';

@Component({
  selector: 'init-component',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class initComponent implements AfterViewInit {
  title = 'EcoQR';
  hide = true;
  public swiper: any;
  formLoginQR!: FormGroup;
  init = true;
 // public loading = false;
  @Output() elementSelected = new EventEmitter<any>();
  constructor(
    private fb: FormBuilder,
    private matDialog: MatDialog,
    protected router: Router,
  ) {
    this.formLogin();
  }

  formLogin(){
    this.formLoginQR = this.fb.group({
      user: ['', Validators.compose([Validators.required, Validators.minLength(9),  Validators.pattern(listPatterns.email)])],
      pass: ['', Validators.compose([Validators.required, Validators.nullValidator, Validators.maxLength(12), Validators.minLength(8)])],
    });
  };

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container', {
      updateOnWindowResize: true,
      autoHeight: true,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    this.swiper.on('slideChange', () => {
      this.elementSelected.emit(this.swiper.realIndex);
      if (this.swiper.realIndex === 0) {
        // this.showBtn = false;
      }
      if (this.swiper.realIndex === 1) {

        // this.showBtn = true;
      }
    });


  }

  goNext() {
    console.log('slide change');
    this.swiper.slideNext();
  }

  goPrev() {
    console.log('slide prev');
    this.swiper.slidePrev();
  }

  goRegister(){
   // this.loading = true;
    this.router.navigate(['/main/Onboarding']);
  }

  submitForm(){
    this.router.navigate(['/main/dashboard/init']);
  }

  showLogin(){
    this.init = false;
  }

  showinit(){
    this.init = true;
  }


  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }


  showInfo(){
    this.matDialog.open(MODAL_TO_UP.MODAL_INFO.typeModal, MODAL_TO_UP.MODAL_INFO.configModal )
  }


}
