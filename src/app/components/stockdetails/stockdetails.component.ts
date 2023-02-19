import { Component } from '@angular/core';

@Component({
  selector: 'app-stockdetails',
  templateUrl: './stockdetails.component.html',
  styleUrls: ['./stockdetails.component.css']
})
export class StockdetailsComponent {

  stockDetails = [
    {stockId:1,stockName:'Tata Motars',stockIndustry:'Automobile',stockPurchasePrice:150,stockCurrentPrice:200,stockQty :200},
    {stockId:2,stockName:'Tata Steel',stockIndustry:'MIning',stockPurchasePrice:200,stockCurrentPrice:150,stockQty :100},
  {stockId:3,stockName:'Zomato',stockIndustry:'Food',stockPurchasePrice:60,stockCurrentPrice:65,stockQty :300},
  {stockId:4,stockName:'TCS',stockIndustry:'IT',stockPurchasePrice:2500,stockCurrentPrice:3500,stockQty :100},
  {stockId:5,stockName:'HDFC Bank',stockIndustry:'Bank',stockPurchasePrice:1500,stockCurrentPrice:1000,stockQty :200},
  {stockId:6,stockName:'Wipro',stockIndustry:'IT',stockPurchasePrice:500,stockCurrentPrice:450,stockQty :250},
  {stockId:7,stockName:'Car Trade',stockIndustry:'Automobile',stockPurchasePrice:650,stockCurrentPrice:500,stockQty :200},
  {stockId:8,stockName:'SBI',stockIndustry:'Bank',stockPurchasePrice:100,stockCurrentPrice:10,stockQty :100},
  {stockId:9,stockName:'Airtel',stockIndustry:'Telecom',stockPurchasePrice:700,stockCurrentPrice:2000,stockQty :200},
  {stockId:10,stockName:'Nestle',stockIndustry:'Food',stockPurchasePrice:1000,stockCurrentPrice:1100,stockQty :100}

  ]
}
