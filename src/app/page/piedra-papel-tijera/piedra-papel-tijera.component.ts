import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  parametro1=0;
  parametro2=0;
  parametro3=0;
  jugadaP1=0;
  jugadaP2=0;
  jugadaP3=0;
  variable=0; 
  gp=0;
  gm=0;
  emp=0;
  desactivarBoton=true;
  num: number;
  ganador:number;
  personaContador:number;
  maquinaContador:number;
  ganaM=0;
  ganaP=0;

  constructor() { 
    this.num=0;
    this.ganador=0;
    this.personaContador=0;
    this.maquinaContador=0;
   
    
  }
  valorAleatorio(){
    this.num=Math.floor(Math.random() * (4 - 1)) + 1;  
    console.log("numero random: "+this.num);
    if(this.num==1){
      this.parametro1=1;
      this.parametro2=0;
      this.parametro3=0;
    }else if(this.num==2){
      this.parametro1=0;
      this.parametro2=1;
      this.parametro3=0;
      
    }else{
      this.parametro1=0;
      this.parametro2=0;
      this.parametro3=3;
    }
    return this.num;
  }
  
  jugada(){
    this.valorAleatorio(); 
    if(this.variable==1 && this.num==3){
      this.ganador=2; //gana persona
      this.gp=1;
      this.gm=0;
      this.emp=0;
    }else if(this.variable==1 && this.num==2){
      this.ganador=1;
      this.gm=1;
      this.gp=0;
      this.emp=0;
    }else if(this.variable==2 && this.num==1){
      this.ganador=2;
      this.gp=1;
      this.gm=0;
      this.emp=0;
    }else if(this.variable==2 && this.num==3){
      this.ganador=1;
      this.gm=1;
      this.gp=0;
      this.emp=0;
    }else if(this.variable==3 && this.num==2){
      this.ganador=2;
      this.gp=1;
      this.gm=0;
      this.emp=0;
    }else if(this.variable==3 && this.num==1){
      this.ganador=1;
      this.gm=1;
      this.gp=0;
      this.emp=0;
    }else{
      this.ganador=0;
      this.gm=0;
      this.gp=0;
      this.emp=1;
    }

    if(this.variable==1){
      this.jugadaP1=1;
      this.jugadaP2=0;
      this.jugadaP3=0;
    } else if(this.variable==2){
      this.jugadaP1=0;
      this.jugadaP2=1;
      this.jugadaP3=0;
    }else{
      this.jugadaP1=0;
      this.jugadaP2=0;
      this.jugadaP3=1;
    }
    
    console.log("gana maquina 1 - gana persona 2: "+ this.ganador);
  }

  contador(){
    this.jugada();
    if(this.ganador==1){
      this.maquinaContador++;
      console.log("puntos maquina: "+this.maquinaContador);
    }else if(this.ganador==2){
      this.personaContador++;
      console.log("puntos persona: "+this.personaContador);
    }

    if(this.maquinaContador==3) {this.ganaM=1; this.gm=0;}
    if(this.personaContador==3) {this.ganaP=1; this.gp=0;}
  }

  partidaPPT(){
    this.contador();

    if(this.maquinaContador==3 || this.personaContador==3){
      this.desactivarBoton=false;
    }
  }

    
  reiniciarPPT(){
    this.parametro1=0;
    this.parametro2=0;
    this.parametro3=0;
    this.jugadaP1=0;
    this.jugadaP2=0;
    this.jugadaP3=0;
    this.variable=0; 
    this.gp=0;
    this.gm=0;
    this.emp=0;
    this.desactivarBoton=true;
    this.maquinaContador=0;
    this.personaContador=0;
    this.ganaM=0;
    this.ganaP=0;
  } 

  ngOnInit(): void {
  }

}
