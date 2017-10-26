import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model'


@Component({
  selector: 'beer-list',
  template: `
<label>Price Filter</label>
<select (change)="onChange($event.target.value)">
  <option value="allBeers"selected="selected">All Kegs</option>
  <option value="underFive">Beers for $5 and under</option>
  <option value="overFive">Over $5 per pint</option>
  <option value="emptyKeg">Empty Kegs</option>
</select>

  <table class="table">
    <thead>
      <tr>
        <th>Brand</th>
        <th>Beer Style</th>
        <th>Price</th>
        <th>ABV</th>
        <th>Pints Remaining</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    <tr [class]="lowKeg(beer)" *ngFor='let beer of childBeerList | price:filterByPrice'>
      <td>{{beer.brand}}</td>
      <td>{{beer.name}}</td>
      <td>$ {{beer.price}}</td>
      <td [class]="abvColor(beer)">{{beer.abv}}</td>
      <td>{{beer.pints}}</td>
      <td><button (click)="editButtonHasBeenClicked(beer)">Edit Beer</button></td>
      <td><button (click)="servePint(beer)">Serve Pint</button></td>
    </tr>
    </tbody>
  </table>

  `
})

export class BeerListComponent {
  @Input() childBeerList: Beer[];
  @Output() clickSender = new EventEmitter();
  filterByPrice: string = "allBeers";

editButtonHasBeenClicked(beerToEdit, Beer) {
  this.clickSender.emit(beerToEdit);
}

onChange(optionFromMenu) {
  this.filterByPrice = optionFromMenu;
}

servePint(selectedBeer: Beer){
selectedBeer.tapped = true;
selectedBeer.pints -= 1;
  if (selectedBeer.pints <= 0){
    selectedBeer.pints = 0;
  }
}

lowKeg(beer) {
  if(beer.pints<=124 && beer.pints>50){
    return "text-primary";
  } else if(beer.pints <= 50 && beer.pints > 10) {
    return "text-warning";
  } else if(beer.pints <= 10){
    return "text-danger";
  }
}

abvColor(beer){
  if(beer.abv >= 5){
    return "bg-danger";
  }
}

}
