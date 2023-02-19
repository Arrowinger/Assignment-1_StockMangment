import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusCheck'
})
export class StatusCheckPipe implements PipeTransform {

  transform(value: number, stockCurrentPice : number,stockPurchasePrice: number): string {
    let investmentValue = value * stockPurchasePrice;
    let currentValue = value * stockCurrentPice;
    if(investmentValue < currentValue){
      return "Profit";
    }
    else{
      return "Loss";
    }
  }

}
