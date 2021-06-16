import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionSuperiorComponent } from './publico/PaginaMaestra/barra-navegacion-superior/barra-navegacion-superior.component';
import { MenuLateralComponent } from './publico/PaginaMaestra/menu-lateral/menu-lateral.component';
import { PieDePaginaComponent } from './publico/PaginaMaestra/pie-de-pagina/pie-de-pagina.component';
import { DefaultComponent } from './publico/home/default/default.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionSuperiorComponent,
    MenuLateralComponent,
    PieDePaginaComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
