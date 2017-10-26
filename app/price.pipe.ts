import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from './beer.model';

@Pipe({
  name: "price",
  pure: false
})

export class PricePipe implements PipeTransform {
  transform(input: Beer[], pricePoint) {
    let output: Beer[] = [];
    if(pricePoint === "underFive"){
      for (let i = 0; i < input.length; i++) {
        if (input[i].price <= 5) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (pricePoint === "overFive"){
      for(var i=0; i<input.length;i++){
        if(input[i].price > 5){
          output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
    }
  }

}
