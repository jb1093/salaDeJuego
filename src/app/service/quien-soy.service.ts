import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class QuienSoyService {
  urlAppi: string ='https://api.github.com/users/jb1093';
  quiensoy:any;
  //avatar_url: string;
  //name: any;
  
  constructor(private miHTTP: HttpClient) {
    this.quiensoy=[];//no llama al array 
    //this.avatar_url=miHTTP["avatar_url"];
    //this.name=this.quiensoy[this.name];
  }
 
  retornarPerfil(){
    return this.miHTTP.get(this.urlAppi);//el all
  }
}
