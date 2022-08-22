import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvGuard } from './guardianes/adv.guard';
import { JuegoPremiumGuard } from './guardianes/juego-premium.guard';
import { LogueoGuard } from './guardianes/logueo.guard';
import { PptGuard } from './guardianes/ppt.guard';
import { TttGuard } from './guardianes/ttt.guard';
import { AdivinadorNumericoComponent } from './page/adivinador-numerico/adivinador-numerico.component';
import { ErrorComponent } from './page/error/error.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { PerfilComponent } from './page/perfil/perfil.component';
import { PiedraPapelTijeraComponent } from './page/piedra-papel-tijera/piedra-papel-tijera.component';
import { PptPremiumComponent } from './page/ppt-premium/ppt-premium.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { RegistroComponent } from './page/registro/registro.component';
import { TatetiComponent } from './page/tateti/tateti.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"quienSoy", component:QuienSoyComponent, canActivate:[LogueoGuard]},
  {path:"inicio", component:HomeComponent, canActivate:[LogueoGuard]},
  {path:"registrar",component:RegistroComponent},
  {path:"piedraPapelTijera", component:PiedraPapelTijeraComponent, canActivate:[PptGuard]},
  {path:"tateti", component:TatetiComponent, canActivate:[TttGuard]},
  {path:"adivinadorNumerico", component:AdivinadorNumericoComponent, canActivate:[AdvGuard]},
  {path:"ppt-premium", component:PptPremiumComponent,canActivate:[LogueoGuard, JuegoPremiumGuard] },
  {path:"perfil", component:PerfilComponent,canActivate:[LogueoGuard]},
  {path:"", component:LoginComponent},
  {path:"**", component:ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
