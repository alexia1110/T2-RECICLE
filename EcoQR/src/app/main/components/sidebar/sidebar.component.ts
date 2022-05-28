import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';
import { Usuario } from '../../models/usuario.model';
import { ContextService } from '../../services/context.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  public activeMenu = '';
  optionsDropdownActive = false;
  showFiller = false;
  optionsInfoSession = false;
  usuario!: Usuario;
  @Output() navClick = new EventEmitter();
  @Input() disableReconocimiento: boolean = false;
  @Input() active: string = '';

  constructor(
    protected router: Router,
    private contxtSrv: ContextService
  ) {
this.usuario = this.contxtSrv.getUsuario();
  
  }

  ngOnInit () {
    // window.onclick = (e) => {
    //   if(!e.target.matches('.dropdown *') ) {
    //     this.optionsDropdownActive = false;
    //   }
    // }

    // window.ontouchstart =(e) => {
    //   if(!e.target.matches('.dropdown *')) {
    //     this.optionsDropdownActive = false
    //   }
    // }
 }

clickMenu(event: any){
  console.log(event);
  
  // this.showMenu = true;
}

public setActive(item: string) {
  // console.clear();
  // console.log('ANTERIOR:', this.active, 'EJECUTADO:', item);
  if (item !== this.active) {
    this.activeMenu = item;
    this.navClick.emit(item);
    this.optionsDropdownActive = false;

      this.router.navigate([item])
    
  
  }
}





}
