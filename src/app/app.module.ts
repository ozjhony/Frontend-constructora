import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionSuperiorComponent } from './publico/PaginaMaestra/barra-navegacion-superior/barra-navegacion-superior.component';
import { MenuLateralComponent } from './publico/PaginaMaestra/menu-lateral/menu-lateral.component';
import { PieDePaginaComponent } from './publico/PaginaMaestra/pie-de-pagina/pie-de-pagina.component';
import { DefaultComponent } from './publico/home/default/default.component';
import { Error404Component } from './publico/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { LppComponent } from './publico/lpp/lpp.component';
import { DetallespComponent } from './publico/detallesp/detallesp.component';



@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionSuperiorComponent,
    MenuLateralComponent,
    PieDePaginaComponent,
    DefaultComponent,
    Error404Component,
    LppComponent,
    DetallespComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
