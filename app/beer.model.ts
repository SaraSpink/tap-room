export class Beer {
  public tapped: boolean = false;
  public pints: number = 124;
  constructor(public name: string, public brand: string, public price: number, public abv: number) { }
}
