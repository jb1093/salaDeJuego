import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {
  jugador: string;
  juego: string;
  horario: any; 
  puntaje: number;
  premium:string;
  ppt:string;
  ttt:string;
  adv:string;
  constructor() { 
    this.jugador="";
    this.juego="";
    this.horario= null; 
    this.puntaje=0; 
    this.premium="NO";
    this.ttt="SI";
    this.ppt="NO";
    this.adv="NO";
  }

  guardarJugadas(){
    var listadoDeJuegos=[];
   
    if(localStorage.getItem("jugadasGeneral")===null){
      listadoDeJuegos=[];
    }else{
      listadoDeJuegos=JSON.parse(localStorage.getItem("jugadasGeneral") || "{}");
    }
    listadoDeJuegos.push(this);
    localStorage.setItem('jugadasGeneral', JSON.stringify(listadoDeJuegos));
  }

  jugadasTateti(){
    var tatetiListado=[];
    if(localStorage.getItem("tateti")===null){
      tatetiListado=[];
    }else{
      tatetiListado=JSON.parse(localStorage.getItem("tateti") || "{}");
    }
    tatetiListado.push(this);
    localStorage.setItem('tateti', JSON.stringify(tatetiListado));
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
