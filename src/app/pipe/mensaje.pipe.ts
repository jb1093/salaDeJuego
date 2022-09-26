import { Pipe, PipeTransform } from '@angular/core';
import { Entidades } from '../calses/entidades';

@Pipe({
  name: 'mensaje'
})
export class MensajePipe implements PipeTransform {

  transform(value : Entidades ): string {
    return value.usuario + '' + value.texto;
  }

}
