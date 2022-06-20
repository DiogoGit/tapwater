import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './configs/auth/auth.guard';
import { LoginComponent } from './modules/logged-out/pages/login/login.component';
import { NotFoundComponent } from './modules/logged-out/pages/not-found/not-found.component';
import { RegisterAccountComponent } from './modules/logged-out/pages/register-account/register-account.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterAccountComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/logged-in/logged-in.module').then((m) => m.LoggedInModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
