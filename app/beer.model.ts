export class Beer {
  public tapped: boolean = false;
  public pints: number = 12;
  constructor(public name: string, public brand: string, public price: number, public abv: string) { }
}
