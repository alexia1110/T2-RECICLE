import { MatDialog } from '@angular/material/dialog';
import { ModalCIComponent } from '../../components/modals/modalCI/modal-ci.component';
import { CATEGORIES_RECYCLE } from '../../constant/categories.constant';

export function iconByCategorie(material: string) {
  return CATEGORIES_RECYCLE.categorie.find(
    (element) => element.name === material
  );
}

export function modalInfo(matdialog: MatDialog, categorie: string) {
   console.log(categorie);
   
  let data;
  switch (categorie) {
    case 'plastic':
      data = {
        title: 'Pasos de preparación Plastico',
        body:
          '<div class="body2" fxLayout="column" fxLayoutAlign="center  center" fxFlex=100>' +
          '<img src="assets/img/clean-plastic.jpeg" alt="">' +
          '<p>Paso 1: Debes quitar las etiquetas</p>' +
          '<p>Paso 2: Debes lavar el embase y dejar secacando</p>' +
          '</div>',
      };
      break;

    case 'glass':
      data = {
        title: 'Pasos de preparación Vidrio',
        body:
          '<div class="body2"  fxLayout="column" fxLayoutAlign="center  center" fxFlex=100 >' +
          '<p> Paso 1: Debes retirar las etiquetas del residuo</p>' +
          '<img src="assets/img/glass-etic.jpeg" alt="">' +
          '<p>Paso 2: Debes limpiar el interior y el exterior del residuo con agua </p>' +
          '<img src="assets/img/glass-clean.jpeg" alt="">' +
          '<p>Paso 3: Debes dejar secar el residuo </p>' +
          '</div>',
      };
      break;
    case 'cardboard_drink':
      data = {
        title: 'Pasos de preparación TetraPack',
        body:
          '<div class="body2" fxLayout="column" fxLayoutAlign="center  center" fxFlex=100 >' +
          '<img src="assets/img/tetrapack.png" alt="">' +
          '<p>Sigue los pasos indicados en la imagen</p>' +
          '</div>',
      };
      break;
  }

  console.log(data);
  
  return matdialog.open(ModalCIComponent, {
    data: data,
    autoFocus: false,
    maxWidth: '95vw',
    maxHeight: 'auto',
    width: '640px',
    panelClass: 'MODAL_MVP',
  });
}
