import { PersonalSettingsService } from './personal-settings.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonalSettings } from 'src/app/model/PersonalSettings';

@Component({
  selector: 'app-personal-settings',
  templateUrl: './personal-settings.component.html',
  styleUrls: ['./personal-settings.component.css']
})
export class PersonalSettingsComponent implements OnInit {

  @ViewChild('form') form!: NgForm;

  personalSettings!: PersonalSettings;

  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private personalSettingsService: PersonalSettingsService) { }

  ngOnInit(): void {
    console.log();
    this.personalSettings = this.personalSettingsService.getSettings();
    if (this.personalSettings == null) {
      this.personalSettings = new PersonalSettings("", "", "");
    }

  }

  onSubmit() {
    this.personalSettingsService.save(this.personalSettings);
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';
  }

}
