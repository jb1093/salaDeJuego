import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/clases/usuarios';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  auxusuario: string;
  auxclave1: string;
  auxclave2: string; 
  miUsuario:Usuarios;
  validar:boolean;
  
  constructor(private miRouter:Router) {
    this.auxusuario="";
    this.auxclave1="";
    this.auxclave2="";
    this.miUsuario=new Usuarios();
    this.validar=false;
  }

  registrar(){
    if(this.auxclave1==this.auxclave2){
      this.miUsuario.nombre=this.auxusuario;
      this.miUsuario.clave=this.auxclave1;
      this.miUsuario.guardar(); 
      console.log("Datos guardados!!");
      this.validar=false;
      this.miRouter.navigate(["/inicio"]);

    }else{
      console.log("Datos incorrectos");
      this.validar=true;
      
    }

  }

  ngOnInit(): void {
  }

}
