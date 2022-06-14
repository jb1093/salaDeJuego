import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/clases/usuarios';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  public forma: FormGroup;
  auxusuario: string;
  auxclave1: string;
  auxclave2: string; 
  miUsuario:Usuarios;
  validar:boolean;
  
  
  public constructor(private miRouter:Router, private fb:FormBuilder) {
    this.auxusuario="";
    this.auxclave1="";
    this.auxclave2="";
    this.miUsuario=new Usuarios();
    this.validar=false;
   
    this.forma=this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password':['',[Validators.required ]],
      'pwd':['',[Validators.required ]]
    });
  }
  
  ngOnInit(): void {
       
  }

    

  public aceptar():void{
    console.log(this.forma.getRawValue());
  }

 
  registrar(){
    //console.info("forma",this.forma.value.pwd);
    if(this.forma.value.password==this.forma.value.pwd){
    
      this.miUsuario.nombre=this.forma.value.email;
      this.miUsuario.clave=this.forma.value.pwd;

      this.miUsuario.guardar(); 
      console.log("Datos guardados!!");
      this.validar=false;
      this.miRouter.navigate(["/inicio"]);
      console.log("Datos correctos");
      

    }else{
      console.log("Datos incorrectos");
      this.validar=true;
      
    }

  }

}
