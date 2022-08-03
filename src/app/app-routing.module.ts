import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraComponent } from './componentes/barra/barra.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListarPeliculasComponent } from './componentes/listar-peliculas/listar-peliculas.component';
import { CrearPeliculasComponent } from './componentes/crear-peliculas/crear-peliculas.component';
import { DesarrolladorComponent } from './componentes/desarrollador/desarrollador.component';

const routes: Routes = [
  {path: 'barra', component:BarraComponent},
  {path: '', component:InicioComponent},
  {path: 'listarPelis', component:ListarPeliculasComponent},
  {path: 'crearPelis', component:CrearPeliculasComponent},
  {path: 'desarrollador', component: DesarrolladorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
