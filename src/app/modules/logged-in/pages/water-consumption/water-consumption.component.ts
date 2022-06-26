import { Component, OnInit } from '@angular/core';
import { Consumption } from 'src/app/model/Consumption';
import { PersonalSettings } from 'src/app/model/PersonalSettings';
import { ConsumptionService } from 'src/app/services/consumption.service';
import { PersonalSettingsService } from '../personal-settings/personal-settings.service';

@Component({
  selector: 'app-water-consumption',
  templateUrl: './water-consumption.component.html',
  styleUrls: ['./water-consumption.component.css']
})
export class WaterConsumptionComponent implements OnInit {
  personalSettings!: PersonalSettings;

  consum: Consumption[] = [];
  percent: number = 0;
  suggestedConsumption: number = 2400;

  constructor(private consumService: ConsumptionService, private personalSettingsService: PersonalSettingsService) { }

  ngOnInit(): void {
    this.personalSettings = this.personalSettingsService.getSettings();
    var todayDate = new Date().toISOString().slice(0, 10);
    this.consumService.getByDay(todayDate).subscribe(
      data => {
        this.consum = data;

        const consumptionValue = data.reduce((part, value) => part + value.quant, 0);
        if (consumptionValue == 0) {
          this.percent = 0;
          return;
        }

        var peso = parseFloat(this.personalSettings.peso);

        if (this.personalSettings == null || peso == 0 || peso == NaN) {
          this.personalSettings = new PersonalSettings("", "", "");
          this.suggestedConsumption = 2400;
        } else {
          this.suggestedConsumption = peso * 35;
        }

        this.percent = consumptionValue / this.suggestedConsumption;
      }
    );
  }

}
