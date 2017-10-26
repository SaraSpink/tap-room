import { Component, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'new-beer',
  template: `
  <div class="jumbotron">
    <h1>Enter A Beer!</h1>
  </div>

  <div class="well">
    <table class="table">
      <thead>
        <th>Enter Brand</th>
        <th>Enter Beer Style</th>
        <th>Enter Price</th>
        <th>Enter ABV</th>
      </thead>
      <tbody>
        <td><input #newBeerBrand></td>
        <td><input #newBeerName></td>
        <td><input #newBeerPrice></td>
        <td><input #newBeerAbv></td>
      </tbody>
      <button (click)="submitForm(newBeerName.value, newBeerBrand.value, newBeerPrice.value, newBeerAbv.value); newBeerName.value=''; newBeerBrand.value=''; newBeerPrice.value = null; newBeerAbv.value= null;" class="btn btn-info">Add Beer</button>
    </table>
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
