import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioLogueadoService } from '../servicios/usuario-logueado.service';

@Injectable({
  providedIn: 'root'
})
export class LogueoGuard implements CanActivate {

  constructor(public miServicio:UsuarioLogueadoService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.miServicio.estadoLogueado==true){
        return true;
      }else{
        return false;
      }
  }
  
}
