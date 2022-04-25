import { Injectable } from "@angular/core";
import { QrData } from "../components/interfaces/qrData";


@Injectable({
    providedIn: 'root'
  })
  export class ContextService {
    containerSave: QrData[]=[];

    setContainerSave(objet: QrData): void {
        this.containerSave.push(objet);
      }
    
      getContainerSave(): QrData[] {
        return this.containerSave;
      }
  }