import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {
  //urlAppi: string ='https://github.com/jb1093';
  //quiensoy:any;
  
  constructor(/*private miHTTP: HttpClient*/) { 
    //this.quiensoy=[];
  }

  /*retornarPerfil():Observable<any>{
    return this.miHTTP.get(this.urlAppi+"all");
  }*/

  ngOnInit(): void {
  }

}
