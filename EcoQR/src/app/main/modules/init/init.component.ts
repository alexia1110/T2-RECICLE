import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'init-component',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class initComponent {
  title = 'EcoQR';
  public swiper: any;
  init = true;
  @Output() elementSelected = new EventEmitter<any>();
  constructor(
    protected router: Router,
  ) {
  }
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
    this.router.navigate(['/main/Onboarding']);
  }

  goLogin(){
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



}
