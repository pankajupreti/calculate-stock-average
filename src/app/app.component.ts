import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buy1Price: number | undefined;
  qty1: number | undefined;
  buy2Price: number | undefined;
  qty2: number | undefined;
  averagePrice: number | undefined;
  totalAmountInvested: number | undefined;

  initialPrice: number | undefined;
  currentPrice: number | undefined;
  percentageMove: number | undefined;

  calculate() {
    if (this.buy1Price !== undefined && this.qty1 !== undefined && this.buy2Price !== undefined && this.qty2 !== undefined) {
      const sumOfPrices = this.buy1Price * this.qty1 + this.buy2Price * this.qty2;
      const totalQuantity = this.qty1 + this.qty2;

      const calculatedAveragePrice = sumOfPrices / totalQuantity;
      this.averagePrice = Number(calculatedAveragePrice.toFixed(2)); // Calculate and round to 2 decimal places

      this.totalAmountInvested = sumOfPrices;
    }
  }

  calculatePercentageMove() {
    if (this.initialPrice !== undefined && this.currentPrice !== undefined) {
      const percentageMove = ((this.currentPrice - this.initialPrice) / this.initialPrice) * 100;
      this.percentageMove = parseFloat(percentageMove.toFixed(2));
    }
  }
  
}
