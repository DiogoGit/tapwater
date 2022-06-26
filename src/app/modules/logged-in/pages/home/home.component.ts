import { ConsumptionService } from './../../../../services/consumption.service';
import { PersonalSettingsService } from './../personal-settings/personal-settings.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonalSettings } from 'src/app/model/PersonalSettings';
import { Consumption } from 'src/app/model/Consumption';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  personalSettings!: PersonalSettings;

  constructor(private route: ActivatedRoute, private personalSettingsService: PersonalSettingsService, private consumService: ConsumptionService) { }

  ngOnInit(): void {
    this.personalSettings = this.personalSettingsService.getSettings();
    if (this.personalSettings == null) {
      this.personalSettings = new PersonalSettings("", "", "");
    }
  }

  addItemDefault() {
    var copoValue = parseFloat(this.personalSettings.copoPadrao);
    if(copoValue == NaN || copoValue == 0){
      alert("valor para copo padrão não encontrado!")
      return;
    }
    this.addItem(copoValue);
  }

  addItem(value: number) {
    var date = new Date();
    var todayDate = date.toISOString().slice(0, 10);
    var hour = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    var consum = new Consumption(value, todayDate, hour);
    this.consumService.save(consum);
    alert(`Valor adicionado com sucesso`);
  }

}
