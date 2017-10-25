import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'edit-beer',
  template: `
  <div>
    <div *ngIf="childSelectedBeer">
      <h3>{{childSelectedBeer.brand}} {{childSelectedBeer.name}}</h3>

      <h3>Edit Beer</h3>
      <label>Enter Beer Name:</label>
      <input [(ngModel)]="childSelectedBeer.name">
      <label>Enter Beer Brand:</label>
      <input [(ngModel)]="childSelectedBeer.brand">
      <label>Enter Beer Price:</label>
      <input [(ngModel)]="childSelectedBeer.price">
      <label>Enter Beer ABV:</label>
      <input [(ngModel)]="childSelectedBeer.abv">

      <button (click)="tapButtonClicked()">Done editing!</button>
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
