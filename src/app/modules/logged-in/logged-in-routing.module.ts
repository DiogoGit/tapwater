import { PersonalSettingsComponent } from './pages/personal-settings/personal-settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInComponent } from './logged-in.component';
import { HomeComponent } from './pages/home/home.component';
import { WaterConsumptionComponent } from './pages/water-consumption/water-consumption.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedInComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'settings',
        component: PersonalSettingsComponent
      },
      {
        path: 'list',
        component: WaterConsumptionComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInRoutingModule { }
