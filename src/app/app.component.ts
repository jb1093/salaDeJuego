import { Component } from '@angular/core';
import { UsuarioLogueadoService } from './servicios/usuario-logueado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salaDeJuegos';
  constructor(public miServicio:UsuarioLogueadoService){}
}
