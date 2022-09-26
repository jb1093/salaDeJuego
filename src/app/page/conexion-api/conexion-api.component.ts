import { Component, OnInit } from '@angular/core';
import { ConexApiServicioService } from 'src/app/servicios/conex-api-servicio.service';

@Component({
  selector: 'app-conexion-api',
  templateUrl: './conexion-api.component.html',
  styleUrls: ['./conexion-api.component.css']
})
export class ConexionApiComponent implements OnInit {
  public mostrar:any; 

  constructor(private miServicio: ConexApiServicioService) {
    
   }

  

  ngOnInit(): void {
    this.miServicio.retornarPhp().subscribe( x=>{
      console.info(x);
      this.mostrar=x;
      },err=>    console.info(err)
      );
  }

}
