import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexApiServicioService {
  api: string ="http://localhost:8081/";
  
  constructor(private conexion: HttpClient) {

   }
   retornarPhp(){
   return  this.conexion.get(this.api); 
   }

}
