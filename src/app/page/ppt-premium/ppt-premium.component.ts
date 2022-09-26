import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Entidades } from 'src/app/calses/entidades';
import { StorageService } from 'src/app/servicios/storage.service';

@Component({
  selector: 'app-ppt-premium',
  templateUrl: './ppt-premium.component.html',
  styleUrls: ['./ppt-premium.component.css']
})
export class PptPremiumComponent implements OnInit {
  title='Firestore';
  public textoMensaje: string=""; 
  public coleccion: Array<Entidades>= new Array<Entidades>(); 
  public coleccionAsync: Observable<Array<Entidades>>;

   constructor(private firestoreapp: StorageService){
    firestoreapp.traerColeccionMensajeria().subscribe(t =>{
      this.coleccion=[];
      (<Array<any>>t).forEach(element => this.coleccion.push(element))
    });
    this.coleccionAsync=this.firestoreapp.traerColeccionMensajeria(); 
   }

   agregar(){
    let mensajeAPasar: Entidades=new Entidades();
    mensajeAPasar.texto=this.textoMensaje;
    mensajeAPasar.usuario="Bogado julieta";
    this.firestoreapp.setItemMensajes(mensajeAPasar);
   }


   ngOnInit(): void {
  }
  
  
   

}
