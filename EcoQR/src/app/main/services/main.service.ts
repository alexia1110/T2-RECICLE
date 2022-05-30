import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { ControlService } from "./control.service";
import {Usuario} from "./../models/usuario.model";
import { Contenedor } from "../models/contenedor.model";

@Injectable({
  providedIn: 'root'
})
  export class MainService {
    JsonHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
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

     public login(mail: string, pass: string): Observable<any>{      
        const uri = 'http://localhost:8080/usuario/login/mail='+mail +'&pass='+pass;      
        return this.http.get(uri, { headers: this.JsonHeader }).pipe(map(($response: any) => {       
          return $response;
        }));
      }


      setNewUser(usuario: Usuario): Observable<any>{
        const uri = 'http://localhost:8080/usuario/new_user';
        return this.http.post(uri,usuario,{ headers: this.JsonHeader });

      }

      getAllContenedores(id: any): Observable<any>{
        const uri = 'http://localhost:8080/usuario/list_container/'+id;
        return this.http.get(uri, { headers: this.JsonHeader }).pipe(map(($response: any) => {       
          return $response;
        }));
      }

      getContenedoresNoRecicle(id: any): Observable<any>{
        const uri = 'http://localhost:8080/usuario/list_container_no_reciclados/'+id;
        return this.http.get(uri, { headers: this.JsonHeader }).pipe(map(($response: any) => {       
          return $response;
        }));
      }

      newContenedor(id: any, contenedor: Contenedor): Observable<any>{
        const uri = 'http://localhost:8080/usuario/new_container/'+id;
        return this.http.post(uri,contenedor,{ headers: this.JsonHeader });
      }

      updateContenedor(id: any): Observable<any>{
        const uri = 'http://localhost:8080/usuario/recycle/'+id;
        return this.http.get(uri, { headers: this.JsonHeader }).pipe(map(($response: any) => {       
          return $response;
        }));
      }
  }