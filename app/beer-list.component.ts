import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model'

@Component({
  selector: 'beer-list',
  template: `

  <table class="table">
    <thead>
      <tr>
        <th>Beer Brand</th>
        <th>Beer Style</th>
        <th>Beer Price</th>
        <th>Beer ABV</th>
        <th>Pints Remaining</th>
        <th></th>
        <th></th>

      </tr>
    </thead>
    <tbody>
    <tr [class]="lowKeg(beer)" *ngFor='let beer of childBeerList'>
      <td>{{beer.brand}}</td>
      <td>{{beer.name}}</td>
      <td>{{beer.price}}</td>
      <td>{{beer.abv}}</td>
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

  editButtonHasBeenClicked(beerToEdit, Beer) {
    this.clickSender.emit(beerToEdit);
  }

  // isTapped(clickedBeer: Beer) {
  //   if(clickedBeer.tapped === true) {
  //     alert("this keg is tapped!!");
  //   } else {
  //     alert("This keg is not tapped, get your DRANK on.");
  //   }
  //   debugger;
  // }

servePint(selectedBeer: Beer){
  selectedBeer.tapped = true;
  selectedBeer.pints -= 1;

}

lowKeg(beer) {
  if(beer.pints<=124 && beer.pints>50){
    return "text-primary";
  }else if(beer.pints <= 50 && beer.pints > 10) {
    return "text-warning";
  }else if(beer.pints <= 10){
    return "text-danger";
  }
}
 //  priorityColor(currentTask){
 //   if (currentTask.priority === 3){
 //     return "bg-danger";
 //   } else if (currentTask.priority === 2) {
 //     return  "bg-warning";
 //   } else {
 //     return "bg-info";
 //   }
 // }
}
