import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recomendation'
})
export class RecomendationPipe implements PipeTransform {

  transform(value: number, stockCurrentPice : number,stockPurchasePrice: number) {
    let investmentValue = value * stockPurchasePrice;
    let currentValue = value * stockCurrentPice;
    let profitLoss = ((currentValue - investmentValue)/investmentValue)*100;
    if(profitLoss < -20 && profitLoss > -40){
      return "Buy More";
    }
    else if( profitLoss >= -15 && profitLoss <=15)
    {
      return "Hold";
    }
    else if(profitLoss > 20 || profitLoss < -40){
      return "Sell";
    }
    return "NA";

  }

}
