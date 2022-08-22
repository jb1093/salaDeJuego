import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JugadoresPremiumService } from '../servicios/jugadores-premium.service';

@Injectable({
  providedIn: 'root'
})
export class JuegoPremiumGuard implements CanActivate {
  
  constructor(public miServicePremium: JugadoresPremiumService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
      return true;
      
  }

  /*buscarPremium(){
    var premiumListado=[];
    var validoUsuario=0;
    premiumListado=JSON.parse(localStorage.getItem("premiumListado")|| "{}");
    if(Object.entries(premiumListado).length!=0){
      premiumListado.forEach((element: any): void =>{
        if(element.jugador==this.miServicePremium.jugador && element.premium=="SI"){
          validoUsuario=1;
          this.validoPremium=true;
        }
      });
    }
 }*/


  
}
