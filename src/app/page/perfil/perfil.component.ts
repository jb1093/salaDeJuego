import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/clases/usuarios';
import { JugadoresService } from 'src/app/servicios/jugadores.service';
import { UsuarioLogueadoService } from 'src/app/servicios/usuario-logueado.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  miUsuario:Usuarios;
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  utlimoJugador: string;
  constructor(public miServicio:JugadoresService, public miUsuarioService: UsuarioLogueadoService) {
    this.miUsuario=new Usuarios();
    this.utlimoJugador="";
  }

  activar(){
    this.miServicio.juego="piedra-papel-tijera";
    this.miServicio.horario=this.pipe.transform(Date.now(), 'dd/MM/yyyy, h:mm:ss a');
    this.miServicio.premium="SI";
    this.miServicio.jugador=this.miUsuarioService.nombre;
    this.miServicio.listadoPremium();
        
  }
  /*buscarUsuario(){
    var usuarioLogueadoListado=[];
    usuarioLogueadoListado=JSON.parse(localStorage.getItem("usuarioListado") || "{}");
    var valor=Object.entries(usuarioLogueadoListado).length; 

      if(Object.entries(usuarioLogueadoListado).length!=0){
      usuarioLogueadoListado.forEach((element:any):void =>{
       
        this.utlimoJugador=element[(Number(valor)-1)];
        console.log("nombre: "+ this.utlimoJugador);
      });
      
    }
    return this.utlimoJugador;  
  }*/
   

  ngOnInit(): void {
  }

}
