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
    dash: boolean = true;

    setContainerSave(objet: QrData): void {
        this.containerSave.push(objet);
      }

      setDash(dash: boolean ){
        this.dash =dash;
      }

      getDash(){
        return this.dash;
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