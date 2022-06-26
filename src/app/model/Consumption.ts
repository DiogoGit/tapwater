
export class Consumption {
  id!: string;

  quant: number;
  day: string;
  hour: string;

  constructor(quant: number, day: string, hour: string) {
    this.id = String(Math.round(Math.random() * 1000));
    this.quant = quant;
    this.day = day;
    this.hour = hour;
  }

}
