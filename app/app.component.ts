import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
<div class="container">
  <h1>{{currentFocus}}</h1>
  <div id="beerList" class= "well">
    <h3>Available Kegs</h3>
    <ol>
      <li [class]= "tapBeer(beer)" (click)="isTapped(beer)" *ngFor='let beer of beers'>{{beer.name}} {{beer.brand}} {{beer.price}} {{beer.abv}}</li>
    </ol>
  </div>

  <div class = "well">
      <form class="form-group">
      <label>Enter Beer Info</label>
      <input class="form-control name" type="text">
      <input class="form-control brand" type="text">
      <input class="form-control price" type="number">
      <input class="form-control abv" type="number">
      <button (click)="createBeer()" type="submit" class= "btn btn-primary" id="createBeer">Add Beer</button>
      </form>
  </div>
</div>
 `

})



export class AppComponent {
  currentFocus: string = 'TAP THAT 5000'
  beers: Beer[] = [
    // new Beer('Red Ale', 'Hair of the Dog', 5, 6.5),
    // new Beer('Brown Ale', 'Mac and Jack\'s', 4, 7.5),
    // new Beer('Stout', 'Guiness', 7, 7.25)
  ];

  createBeer(){

  }
  // isTapped(beer){
  //   if(beer.tapped === true){
  //     beer.tapped = false;
  //   }else{
  //     beer.tapped = true;
  //   }
  // }
  //
  // tapBeer(clickedBeer: Beer){
  //   if(clickedBeer.tapped === true){
  //     return "bg-success"
  //   } else{
  //     return "bg-danger";
  //   }
  // }


}

export class Beer {
  public tapped: boolean = false;
  public pints: number = 124;
  constructor(public name: string, public brand: string, public price: number, public abv: number) { }
}
