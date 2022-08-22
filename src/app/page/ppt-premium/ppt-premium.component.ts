import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/servicios/storage.service';

@Component({
  selector: 'app-ppt-premium',
  templateUrl: './ppt-premium.component.html',
  styleUrls: ['./ppt-premium.component.css']
})
export class PptPremiumComponent implements OnInit {
  title='Firestore';

  public coleccion:Array<string>=new Array<string>();

  constructor(private firestoreapp:StorageService) {
    firestoreapp.trerColeccion().subscribe(t=> 
      {
        this.coleccion=[];
        (<Array<any>>t).forEach(element =>
          this.coleccion.push(JSON.stringify(element)))
      });
  }

  ngOnInit(): void {
  }
  
  Agregar(){
    this.firestoreapp.setItem()
  };

}
