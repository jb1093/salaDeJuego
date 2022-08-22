import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/clases/usuarios';
import { JugadoresPremiumService } from 'src/app/servicios/jugadores-premium.service';
import { UsuarioLogueadoService } from 'src/app/servicios/usuario-logueado.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  public forma: FormGroup;
  miUsuario:Usuarios;
  validar:boolean;
  registro=0;
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  activoPremium=true;
  
  
  public constructor(private miRouter:Router, private fb:FormBuilder, public miServicio:UsuarioLogueadoService, public miPremiumS: JugadoresPremiumService) {
    this.miUsuario=new Usuarios();
    this.validar=false;
   
    this.forma=this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password':['',[Validators.required ]],
      'pwd':['',[Validators.required ]],
      'activoPremium':[]
    });
  }
  
  ngOnInit(): void {
       
  }

    

  public aceptar():void{
    console.log(this.forma.getRawValue());
  }

 
  registrar(){
    //console.info("forma",this.forma.value.pwd);
    var listadousuario=[];
    var validoUsuario=0;
    listadousuario = JSON.parse(localStorage.getItem("listado") || "{}");
        
      if(Object.entries(listadousuario).length!=0){
        listadousuario.forEach((element: any): void =>{
          if(element.nombre==this.forma.value.email){
            console.log("ya se encuentra registrado");
            validoUsuario=1;
          }
        });
      }
    
        if(validoUsuario==1){
          this.registro=1;
        }else if (this.forma.value.password==this.forma.value.pwd){
                this.miUsuario.nombre=this.forma.value.email;
                this.miUsuario.clave=this.forma.value.pwd;
                this.miUsuario.horario= this.pipe.transform(Date.now(), 'dd/MM/yyyy, h:mm:ss a');
                this.miUsuario.guardar(); 
                this.validarCheck();
                this.validar=false;
                console.log("Datos guardados!!");
                this.miServicio.loguear();
                this.miRouter.navigate(["/inicio"]);
        }else{
          console.log("Datos incorrectos");
          this.validar=true;
        }
    
        
  }
  validarCheck(){
    if(this.activoPremium==true){
      this.miPremiumS.jugador=this.forma.value.email;
      this.miPremiumS.premium="SI";
      this.miPremiumS.listadoPremium();
    }
  }

}
