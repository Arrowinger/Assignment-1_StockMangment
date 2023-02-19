import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StockdetailsComponent } from './components/stockdetails/stockdetails.component';
import { CalculateValuePipe } from './pipes/calculate-value.pipe';
import { StatusCheckPipe } from './pipes/status-check.pipe';
import { RecomendationPipe } from './pipes/recomendation.pipe';
@NgModule({
  declarations: [
    AppComponent,
    StockdetailsComponent,
    CalculateValuePipe,
    StatusCheckPipe,
    RecomendationPipe,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
