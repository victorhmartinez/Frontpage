import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent } from './components/administracion/administracion.component'
import { FrontpageComponent } from './components/frontpage/frontpage.component'
//import { LoginComponent } from './components/auth/login/login.component'
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
{ path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  
  
  //{ path: 'login', component: LoginComponent },
  { path: 'administracion', component: AdministracionComponent },
  { path: 'frontpage', component: FrontpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

