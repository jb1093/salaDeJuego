import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  setItem(){
    var juegos=this.firestore.collection('Juegos');
    juegos.add({a:'ddd'});
  }
  constructor(public firestore:AngularFirestore) {
    
    
   }
  
  trerColeccion():Observable<any>{
    var juegos = this.firestore.collection('Juegos');
    return juegos.valueChanges();

  
  }
}
