import { ModalMVPComponent } from "../../components/modals/modalMVP/modal-mvp.component";

export const MODAL_TO_UP = {

MODAL_INFO: {
    typeModal: ModalMVPComponent,
    configModal: {
      data: {
        modal:{
          title: 'Contraseña',
          details: 'La contraseña debe contener un mínimo de 8 caracteres y un máximo de 12, contener una mayuscula y un número',
          type: 'info',
          button: 'ACEPTAR'
        }
      },
      autoFocus: false,
      maxWidth: '95vw',
      maxHeight: 'auto',
      width: '640px',
      panelClass: 'MODAL_INFO'
    }
  },
  MODAL_SUCCES:{
    typeModal: ModalMVPComponent,
    configModal: {
      data: {
        modal:{
        title: '',
        details: '',
        type: 'succes',
        button: 'ACEPTAR'
        }
      },
      autoFocus: false,
      maxWidth: '95vw',
      maxHeight: 'auto',
      width: '640px',
      panelClass: 'MODAL_INFO'
    }
  },
  MODAL_SCAN:{
    typeModal: ModalMVPComponent,
    configModal: {
      data: {
        modal:{
        title: '¿Almacenas o reciclas?',
        details: 'Selecciona si realizaras la recolección al punto de acopio o lo almacenaras en tu contenedor.',
        type: 'scan',
        button: '¡Reciclar!',
        // button2: 'Almacenar'
        }
      },
      autoFocus: false,
      maxWidth: '95vw',
      maxHeight: 'auto',
      width: '640px',
      panelClass: 'MODAL_SCAN'
    }
  },
  MODAL_ERROR:{
    typeModal: ModalMVPComponent,
    configModal: {
      data: {
        modal:{
        title: 'Error',
        details: 'Ha ocurrido un error, por favor intentalo más tarde.',
        type: 'error',
        button: 'Aceptar',
       // button2: 'Almacenar'
        }
      },
      autoFocus: false,
      maxWidth: '95vw',
      maxHeight: 'auto',
      width: '640px',
      panelClass: 'MODAL_Error'
    }
  }

}