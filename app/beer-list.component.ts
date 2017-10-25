import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model'

@Component({
  selector: 'beer-list',
  template: `
  <ol>
    <li [class]= "tapBeer(beer)" (click)="isTapped(beer)" *ngFor='let beer of beers'>{{beer.name}} {{beer.brand}} {{beer.price}} {{beer.abv}}</li>
  </ol>

  `
})

export class BeerListComponent {
  @Input() childBeerList: Beer[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(beerToEdit, Beer) {
    this.clickSender.emit(beerToEdit);
  }

  isTapped(clickedBeer: Beer) {
    if(clickedBeer.tapped === true) {
      alert("this keg is tapped!!");
    } else {
      alert("This keg is not tapped, get your DRANK on.");
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
