import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/components/menu/menu.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterAccountComponent } from './pages/register-account/register-account.component';
import { PersonalSettingsComponent } from './pages/personal-settings/personal-settings.component';
import { WaterConsumptionComponent } from './pages/water-consumption/water-consumption.component';
import { ModalComponent } from './pages/components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterAccountComponent,
    PersonalSettingsComponent,
    WaterConsumptionComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
