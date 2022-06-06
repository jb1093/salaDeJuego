import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdivinadorNumericoComponent } from './page/adivinador-numerico/adivinador-numerico.component';
import { ErrorComponent } from './page/error/error.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { PiedraPapelTijeraComponent } from './page/piedra-papel-tijera/piedra-papel-tijera.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { RegistroComponent } from './page/registro/registro.component';
import { TatetiComponent } from './page/tateti/tateti.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"quienSoy", component:QuienSoyComponent},
  {path:"inicio", component:HomeComponent},
  {path:"registrar",component:RegistroComponent},
  {path:"piedraPapelTijera", component:PiedraPapelTijeraComponent},
  {path:"tateti", component:TatetiComponent},
  {path:"adivinadorNumerico", component:AdivinadorNumericoComponent},
  {path:"", component:HomeComponent},
  {path:"**", component:ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
