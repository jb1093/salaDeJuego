import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/clases/usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  miUsuario:Usuarios;
  auxUsuario:string; 
  auxPass: string;
  validar:boolean;
  constructor(private miRouter: Router) { 
    this.miUsuario=new Usuarios();
    this.auxUsuario="";
    this.auxPass="";
    this.validar=false;
  }
  enviar(){
    var listadousuario=[];
    var validoUsuario=0;
    listadousuario = JSON.parse(localStorage.getItem("listado") || "{}");
    if(Object.entries(listadousuario).length!=0){
        
      listadousuario.forEach((element: any): void =>{
        if(element.nombre==this.auxUsuario){
          if(element.clave==this.auxPass){
            validoUsuario=1;
            this.miRouter.navigate(["/inicio"]);
          }
        }else{
          this.validar=true;
        }
      });
    }
  }

  ngOnInit(): void {
  }

}
