import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//rutas
import {app_routing} from './app.routes';

//componentes
import { AppComponent } from './app.component';
import { AgmCoreModule} from '@agm/core';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdministradorComponent } from './components/roles/administrador/administrador.component';
import { LoginComponent } from './components/login/login.component';
import { AgregarMarcadorComponent } from './components/acciones/agregar-marcador/agregar-marcador.component';
import { AgregarUsuarioComponent } from './components/acciones/agregar-usuario/agregar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AdministradorComponent,
    LoginComponent,
    AgregarMarcadorComponent,
    AgregarUsuarioComponent,

  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyA3d6OC5uV4aQlVClt97CEULYxOvY7b1GU'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
