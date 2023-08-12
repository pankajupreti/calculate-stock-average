import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buy1Price: number = 0;
  qty1: number = 0;
  buy2Price: number = 0;
  qty2: number = 0;
  averagePrice: number = 0;
  totalAmountInvested: number = 0;

  initialPrice: number =0;
  currentPrice: number =0;
  percentageMove: number =0;

  calculate() {
    const sumOfPrices = this.buy1Price * this.qty1 + this.buy2Price * this.qty2;
    const totalQuantity = this.qty1 + this.qty2;
  
    const calculatedAveragePrice = sumOfPrices / totalQuantity;
    this.averagePrice = Number(calculatedAveragePrice.toFixed(2)); // Calculate and round to 2 decimal places
  
    this.totalAmountInvested = sumOfPrices;

  }

  calculatePercentageMove() {
    if (this.initialPrice && this.currentPrice) {
      this.percentageMove = ((this.currentPrice - this.initialPrice) / this.initialPrice) * 100;
    }
  }




}
