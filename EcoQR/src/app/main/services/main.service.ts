import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { ControlService } from "./control.service";
import {Usuario} from "./../models/usuario.model";

@Injectable({
  providedIn: 'root'
})
  export class MainService {
    JsonHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    });
    
    constructor(
      private http: HttpClient,
      private controlService: ControlService,
      ) {

      }

      getPuntosRecycle(lat: number, long: number): Observable<any>{
        const uri = 'https://puntoslimpios.mma.gob.cl/api/points/geo?lat='+lat +'&lng='+long+'&distance=5';
       return this.http.get(uri,{ headers: this.JsonHeader }).pipe(map(($response: any) => {
        return this.controlService.controlPuntoRecycle($response, uri);
       }));
      }

      login(mail: string, pass: string){
        console.log('enter');
        
        const uri = 'http://localhost:8080/usuario/login/'+mail +'&'+pass
        return this.http.get(uri,{ headers: this.JsonHeader });
      }


      setNewUser(usuario: Usuario): Observable<any>{
        const uri = 'http://localhost:8080/usuario/new_user';
        return this.http.post(uri,usuario,{ headers: this.JsonHeader });

      }
  }