import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateValue'
})
export class CalculateValuePipe implements PipeTransform {

  transform(value: number, stockQty : number): number {
    return value * stockQty;
  }

}
