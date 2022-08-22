import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugadoresPremiumService {
  jugador:string;
  premium:string;
  validoPremium=false; 
  constructor() {
    this.jugador="";
    this.premium="";
   }

   listadoPremium(){
    var premiumListado=[];
    if(localStorage.getItem("premiumListado")===null){
      premiumListado=[];
    }else{
      premiumListado=JSON.parse(localStorage.getItem("premiumListado")|| "{}");
    }
    premiumListado.push(this);
    localStorage.setItem('premiumListado', JSON.stringify(premiumListado));
  }
}
