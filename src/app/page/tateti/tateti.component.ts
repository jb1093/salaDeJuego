import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  posiciones=[['-','-','-'],
              ['-','-','-'],
              ['-','-','-']];
  jugador='O';
  gO=0;
  gX=0;
  disable=0;
  constructor() { 
  
  }

  presion(fila:number,columna:number) {
    if (this.posiciones[fila][columna]=='-') {
      this.posiciones[fila][columna]=this.jugador;
      this.verificarGano();
      this.verificarGano();
      this.cambiarJugador();
    }
  }

  reiniciar() {
    for(let f=0;f<3;f++){
      for(let c=0;c<3;c++){
        this.posiciones[f][c]='-';
      }
    }
    this.gO=0;
    this.gX=0; 
    this.disable=0;     
  }
  cambiarJugador() {
    if (this.jugador=='O')
      this.jugador='X';
    else
      this.jugador='O';    
  }
  
  verificarGano() {
    if(this.posiciones[0][0]=="X" && this.posiciones[0][1]=="X" && this.posiciones[0][2]=="X" ||
      this.posiciones[1][0]=="X" && this.posiciones[1][1]=="X" && this.posiciones[1][2]=="X" ||
      this.posiciones[2][0]=="X" && this.posiciones[2][1]=="X" && this.posiciones[2][2]=="X" ||
      this.posiciones[0][0]=="X" && this.posiciones[1][0]=="X" && this.posiciones[2][0]=="X" ||
      this.posiciones[0][1]=="X" && this.posiciones[1][1]=="X" && this.posiciones[2][1]=="X" ||
      this.posiciones[0][2]=="X" && this.posiciones[1][2]=="X" && this.posiciones[2][2]=="X" ||
      this.posiciones[0][0]=="X" && this.posiciones[1][1]=="X" && this.posiciones[2][2]=="X" ||
      this.posiciones[2][0]=="X" && this.posiciones[1][1]=="X" && this.posiciones[0][2]=="X"  ){
        console.log("gana persona");
        this.gX=1;
        this.disable=1;
      } else if (this.posiciones[0][0]=="O" && this.posiciones[0][1]=="O" && this.posiciones[0][2]=="O" ||
                  this.posiciones[1][0]=="O" && this.posiciones[1][1]=="O" && this.posiciones[1][2]=="O" ||
                  this.posiciones[2][0]=="O" && this.posiciones[2][1]=="O" && this.posiciones[2][2]=="O" ||
                  this.posiciones[0][0]=="O" && this.posiciones[1][0]=="O" && this.posiciones[2][0]=="O" ||
                  this.posiciones[0][1]=="O" && this.posiciones[1][1]=="O" && this.posiciones[2][1]=="O" ||
                  this.posiciones[0][2]=="O" && this.posiciones[1][2]=="O" && this.posiciones[2][2]=="O" ||
                  this.posiciones[0][0]=="O" && this.posiciones[1][1]=="O" && this.posiciones[2][2]=="O" ||
                  this.posiciones[2][0]=="O" && this.posiciones[1][1]=="O" && this.posiciones[0][2]=="O"  ){
        console.log("gana maquina");
        this.gO=1;
        this.disable=1;
      }    
  }

  ngOnInit(): void {
  }
}

 

  


