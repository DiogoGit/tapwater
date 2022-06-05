import { Injectable } from '@angular/core';
import { PersonalSettings } from 'src/app/model/PersonalSettings';
import { Constants } from 'src/app/util/Constants';
import { WebStorageUtil } from 'src/app/util/WebStorageUtil';

@Injectable({
  providedIn: 'root',
})
export class PersonalSettingsService {
  personalSettings!: PersonalSettings;

  constructor() {
    this.personalSettings = WebStorageUtil.get(Constants.PERSONAL_SETTINGS_KEY);
  }

  save(personalSettings: PersonalSettings) {
    WebStorageUtil.set(Constants.PERSONAL_SETTINGS_KEY, personalSettings);
  }

  update(personalSettings: PersonalSettings) {
    this.personalSettings = WebStorageUtil.get(Constants.PERSONAL_SETTINGS_KEY);
    this.save(personalSettings);
  }

  getSettings(): PersonalSettings {
    this.personalSettings = WebStorageUtil.get(Constants.PERSONAL_SETTINGS_KEY);
    return this.personalSettings;
  }
}
