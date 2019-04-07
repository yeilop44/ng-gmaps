import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AfiliadosComponent } from './components/afiliados/afiliados.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'afiliados', component: AfiliadosComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: '**', component: LoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AfiliadosComponent,
    LoginComponent ,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
