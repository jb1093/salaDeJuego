import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adivinador-numerico',
  templateUrl: './adivinador-numerico.component.html',
  styleUrls: ['./adivinador-numerico.component.css']
})
export class AdivinadorNumericoComponent implements OnInit {
  numAux: number; 
  num:number;
  parametro=0;//ngif 
  valor=0;
  ganar=0;
  contador:number;
  constructor() { 
    this.numAux=0;
    this.num=0; 
    this.contador=0;
  }

  numeroaleatorio(){
    this.num=Math.floor(Math.random() * (100 - 1)) + 1;  
    console.log("numero random: "+this.num);
    return this.num;
   }
   
  jugar(){
    if(this.numAux<this.num){
        this.valor=1;
        this.parametro=1;
        //numero mayor
    }else if(this.numAux>this.num){
        this.valor=1;
        this.parametro=0;
        //numero menor
    }else{
        this.valor=0;
        this.ganar=1; 
        //ganó
    }
  }
  

  ngOnInit(): void {
  }

}
