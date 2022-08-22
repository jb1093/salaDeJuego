import { Component} from '@angular/core';
import { QuienSoyService } from 'src/app/service/quien-soy.service';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent {
  quiensoy:any;
  
  
  constructor(private miServicio:QuienSoyService) { 
    this.miServicio.retornarPerfil().subscribe(perfil =>{
                                                          //console.info("servicio: ", perfil);
                                                          this.quiensoy=perfil;
                                                          console.info("perfil", this.quiensoy);
                                                        });
  }

  

  ngOnInit(): void {
  }

}
