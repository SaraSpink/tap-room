import { Component, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'new-beer',
  template: `
  <div class="jumbotron">
    <h1>Enter A Beer!</h1>
  </div>
  <div class="well">
    <label>Enter Beer Name</label>
    <input #newBeerName>
    <label>Enter Beer Brand</label>
    <input #newBeerBrand>
    <label>Enter Beer Price</label>
    <input #newBeerPrice>
    <label>Enter Beer ABV</label>
    <input #newBeerAbv>
    <button (click)="submitForm(newBeerName.value, newBeerBrand.value, newBeerPrice.value, newBeerAbv.value); newBeerName.value=''; newBeerBrand.value=''; newBeerPrice.value = null; newBeerAbv.value= null;">Add Beer</button>
  </div>
  `
})

export class NewBeerComponent{
  @Output() newBeerSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, abv: number){
    let newBeerToAdd: Beer = new Beer(name,brand,price,abv);
    this.newBeerSender.emit(newBeerToAdd);
  }
}
