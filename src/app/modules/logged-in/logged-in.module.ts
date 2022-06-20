import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedInRoutingModule } from './logged-in-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonalSettingsComponent } from './pages/personal-settings/personal-settings.component';
import { WaterConsumptionComponent } from './pages/water-consumption/water-consumption.component';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoggedInComponent } from './logged-in.component';


@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    HomeComponent,
    PersonalSettingsComponent,
    WaterConsumptionComponent,
    ModalComponent,
    LoggedInComponent,
  ],
  imports: [
    CommonModule,
    LoggedInRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class LoggedInModule { }
