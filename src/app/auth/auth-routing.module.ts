import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent } from '../components/administracion/administracion.component';
import { FrontpageComponent } from '../components/frontpage/frontpage.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  //{ path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
