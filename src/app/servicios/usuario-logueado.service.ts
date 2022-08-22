import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioLogueadoService {
  nombre:string;
  horario:any;
  estadoLogueado=false;
  
  constructor(private miRouter: Router) {
    this.nombre="";
    this.horario=null;
    }
    
  loguear(){
    this.estadoLogueado=true; 
  }
  desloguear(){
    this.estadoLogueado=false;
    this.miRouter.navigate(["/login"]);
  }
  
}


