import { Component } from '@angular/core';
import { Beer } from './beer.model'

@Component({
  selector: 'app-root',
  template:
  `
<div class="container">
  <h1>{{currentFocus}}</h1>
  <div id="beerList" class= "well">
    <h3>Available Kegs</h3>
    <beer-list [childBeerList]="masterBeerList" (clickSender)="editBeer($event)"></beer-list>
  </div>
  <hr>
  <edit-beer [childSelectedBeer]= "selectedBeer" (tapButtonClickedSender)="kegEditing()"></edit-beer>
  <new-beer (newBeerSender)= "addBeer($event)"></new-beer>
</div>
 `

})



export class AppComponent {
  currentFocus: string = 'TAP THAT 5000'
  selectedBeer = null;
  
  masterBeerList: Beer[] = [
    new Beer('Red Ale', 'Hair of the Dog', 5, 6.5),
    new Beer('Brown Ale', 'Mac and Jack\'s', 4, 7.5),
    new Beer('Stout', 'Guiness', 7, 7.25)
  ];

  editBeer(clickedBeer){
    this.selectedBeer = clickedBeer;
  }

  finishedEditing(){
    this.selectedBeer = null;
  }

  addBeer(newBeerFromChild: Beer){
    this.masterBeerList.push(newBeerFromChild);
  }

}
