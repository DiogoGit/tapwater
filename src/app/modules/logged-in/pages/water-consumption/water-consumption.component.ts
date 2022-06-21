import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-water-consumption',
  templateUrl: './water-consumption.component.html',
  styleUrls: ['./water-consumption.component.css']
})
export class WaterConsumptionComponent implements OnInit {

  consum = [
    {
      time: "10 am",
      quant: "100ml",
    },
    {
      time: "11 am",
      quant: "200ml",
    },
    {
      time: "3 pm",
      quant: "300ml",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
