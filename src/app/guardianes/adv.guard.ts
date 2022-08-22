import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JugadoresService } from '../servicios/jugadores.service';

@Injectable({
  providedIn: 'root'
})
export class AdvGuard implements CanActivate {
  constructor(public miJugadorS: JugadoresService, public miRouter: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.miJugadorS.adv=="SI"){
      return true;
    }else{
      this.miRouter.navigate(["/errorJuego"]);
      return false;

    }
      
  }
  
}
