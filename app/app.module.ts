import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { BeerListComponent } from './beer-list.component';
import { EditBeerComponent } from './beer-edit.component';
import { NewBeerComponent } from './new-beer.component';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                BeerListComponent,
                EditBeerComponent,
                NewBeerComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
