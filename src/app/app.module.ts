import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BarraComponent } from './componentes/barra/barra.component';
import { ListarPeliculasComponent } from './componentes/listar-peliculas/listar-peliculas.component';
import { CrearPeliculasComponent } from './componentes/crear-peliculas/crear-peliculas.component';
import { DesarrolladorComponent } from './componentes/desarrollador/desarrollador.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BarraComponent,
    ListarPeliculasComponent,
    CrearPeliculasComponent,
    DesarrolladorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
