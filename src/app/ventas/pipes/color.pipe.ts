import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(valor: number ): string {
    
    return valor ==0 ? "rojo" : valor ==1 ? "negro" : valor ==2 ? "azul" :"verde"  ;
  }

}
