import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //   let arrPalabras = value.split(' ');
  //   let arrPalabrasMayus = arrPalabras.map(palabra => {
  //     return palabra.charAt(0).toUpperCase() + palabra.slice(1);
  //   });

  //   return arrPalabrasMayus.join(' ');
  // }

  transform(value: any, ...args: any[]): any {
    return value.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
  }

}
