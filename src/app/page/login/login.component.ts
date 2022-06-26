import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/clases/usuarios';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public forma:FormGroup;
  miUsuario:Usuarios;

  validar:boolean;
  constructor(private miRouter: Router, private fb:FormBuilder) { 
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
