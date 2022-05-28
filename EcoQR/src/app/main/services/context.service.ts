import { Injectable } from "@angular/core";
import { QrData } from "../components/interfaces/qrData";
import { Usuario } from "../models/usuario.model";


@Injectable({
    providedIn: 'root'
  })
  export class ContextService {
    containerSave: QrData[]=[];
    usuario: Usuario = new Usuario;
    contenedores: any[] = [];

    setContainerSave(objet: QrData): void {
        this.containerSave.push(objet);
      }
    
      getContainerSave(): QrData[] {
        return this.containerSave;
      }

      updateContainerSave(qrD: QrData[]){
        this.containerSave = qrD;

      }

      setUsuario(usuario: Usuario){
        this.usuario = usuario;
      }

      getUsuario(){
        return this.usuario;
      }

      setContenedores(contenedores:any[]){
        this.contenedores = contenedores;
      }

      getContenedores(){
        return this.contenedores;
      }
  }