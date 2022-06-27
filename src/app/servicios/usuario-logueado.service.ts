import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioLogueadoService {
  estadoLogueado=false;
  constructor(private miRouter: Router) { }
  
  loguear(){
    this.estadoLogueado=true; 
   }
   desloguear(){
    this.estadoLogueado=false;
    this.miRouter.navigate(["/login"]);

   }
}


