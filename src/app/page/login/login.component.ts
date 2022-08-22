import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/clases/usuarios';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { UsuarioLogueadoService } from 'src/app/servicios/usuario-logueado.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public forma:FormGroup;
  miUsuario:Usuarios;
  validar:boolean;
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  aux1="";
  aux2="";
  
 

  constructor(private miRouter: Router, private fb:FormBuilder, public miServicio:UsuarioLogueadoService) { 
    this.miUsuario=new Usuarios();
    this.validar=false;
 

    this.forma=this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password':['',[Validators.required ]]
    });
  }
  public aceptar():void{
    console.log(this.forma.getRawValue());
  }

  enviar(){
    var listadousuario=[];
    var validoUsuario=0;
    listadousuario = JSON.parse(localStorage.getItem("listado") || "{}");
    
    if(Object.entries(listadousuario).length!=0){ 
      listadousuario.forEach((element: any): void =>{
        if(element.nombre==this.forma.value.email){
          if(element.clave==this.forma.value.password){
            validoUsuario=1;
            this.guardarUsuario();
            this.miServicio.loguear();
            this.miRouter.navigate(["/inicio"]);    
          }
        }
      });
      this.validar=true;
      
    }
    
  }

  guardarUsuario(){
    
    this.miServicio.nombre=this.forma.value.email;
    this.miServicio.horario= this.pipe.transform(Date.now(), 'dd/MM/yyyy, h:mm:ss a');
    this.miUsuario.nombre=this.forma.value.email;
    this.miUsuario.horario= this.pipe.transform(Date.now(), 'dd/MM/yyyy, h:mm:ss a');
    this.miUsuario.guardarUsuarioLogueado();
  }

  ingresar(){
    this.aux1="administrador@admin";
    this.aux2="197";
    if(this.forma.value.email=="" && this.forma.value.password==""){
      this.forma.value.email=this.aux1;
      this.forma.value.password=this.aux2;
    }
  }

  ngOnInit(): void {
  }

}
