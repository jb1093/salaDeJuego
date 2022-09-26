import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { RegistroComponent } from './page/registro/registro.component';
import { PiedraPapelTijeraComponent } from './page/piedra-papel-tijera/piedra-papel-tijera.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TatetiComponent } from './page/tateti/tateti.component';
import { AdivinadorNumericoComponent } from './page/adivinador-numerico/adivinador-numerico.component';
import { ErrorComponent } from './page/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { PptPremiumComponent } from './page/ppt-premium/ppt-premium.component';
import { PerfilComponent } from './page/perfil/perfil.component';
import { ErrorJuegoComponent } from './page/error-juego/error-juego.component';
import { environment } from '../environments/environment';
import{AngularFireModule} from'@angular/fire/compat';
import{AngularFirestoreModule} from'@angular/fire/compat/firestore';
import { MensajePipe } from './pipe/mensaje.pipe';
import { UsuarioDirective } from './directiva/usuario.directive';
import { ConexionApiComponent } from './page/conexion-api/conexion-api.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    RegistroComponent,
    PiedraPapelTijeraComponent,
    TatetiComponent,
    AdivinadorNumericoComponent,
    ErrorComponent,
    PptPremiumComponent,
    PerfilComponent,
    ErrorJuegoComponent,
    MensajePipe,
    UsuarioDirective,
    ConexionApiComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    
    
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
