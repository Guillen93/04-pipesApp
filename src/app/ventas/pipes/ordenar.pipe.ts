import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[]): Heroe[] {
    return heroes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
  }

}
