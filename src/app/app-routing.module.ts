import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent } from './components/administracion/administracion.component'
import { FrontpageComponent } from './components/frontpage/frontpage.component'
import { AppComponent } from './app.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },  
  { path: 'administracion', component: AdministracionComponent, canActivate: [AuthGuard] },
  { path: 'frontpage', component: FrontpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

