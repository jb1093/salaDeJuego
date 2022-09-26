import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Entidades } from '../calses/entidades';

@Directive({
  selector: '[appUsuario]'
})
export class UsuarioDirective {
  @Input()

    appUsuario: Entidades = new Entidades();
  constructor(private elemento:ElementRef) {

   }
   @HostListener('window:click') load(){
    this.elemento.nativeElement.innerHTML='<p>' + this.appUsuario.texto + '<p>'; 
   }

}
