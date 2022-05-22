import { PersonalSettingsComponent } from './pages/personal-settings/personal-settings.component';
import { WaterConsumptionComponent } from './pages/water-consumption/water-consumption.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'home/:id', component: HomeComponent},
  {path: 'list', component: WaterConsumptionComponent},
  {path: 'settings', component: PersonalSettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
