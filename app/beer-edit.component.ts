import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'edit-beer',
  template: `
  <div>
    <div *ngIf="childSelectedBeer">
      <h3>Edit {{childSelectedBeer.brand}} {{childSelectedBeer.name}}</h3>
      <table class="table">
        <thead>
          <th>Enter Beer Style</th>
          <th>Enter Brand</th>
          <th>Enter Price</th>
          <th>Enter ABV</th>
        </thead>
        <tbody>
          <td><input [(ngModel)]="childSelectedBeer.name"></td>
          <td><input [(ngModel)]="childSelectedBeer.brand"></td>
          <td><input [(ngModel)]="childSelectedBeer.price"></td>
          <td><input [(ngModel)]="childSelectedBeer.abv"><td>
        </tbody>
      </table>
      <button class= "btn btn-info" (click)="tapButtonClicked()" >Done editing!</button>
    </div>
  </div>
  `
})

export class EditBeerComponent {
  @Input() childSelectedBeer: Beer;
  @Output() tapButtonClickedSender = new EventEmitter();

  tapButtonClicked(){
    this.tapButtonClickedSender.emit();
  }
}
