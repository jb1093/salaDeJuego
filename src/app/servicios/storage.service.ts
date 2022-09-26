import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Entidades } from '../calses/entidades';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  /*setItem(){
    var juegos=this.firestore.collection('Juegos');
    juegos.add({a:'ddd'});
  }*/

  setItemMensajes(miMensajeNuevo: Entidades){
    var mensajes=this.firestore.collection('Mensajeria');
    mensajes.add(JSON.parse(JSON.stringify(miMensajeNuevo)));

  }
  
  constructor(public firestore:AngularFirestore) {
    
    
   }
  
  /*trerColeccion():Observable<any>{
    var juegos = this.firestore.collection('Juegos');
    return juegos.valueChanges();
  }*/

  traerColeccionMensajeria():Observable<any>{
    var mensajes=this.firestore.collection('Mensajeria');
    return mensajes.valueChanges();
  }
}
