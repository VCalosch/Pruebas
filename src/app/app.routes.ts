import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { AdministradorComponent } from '../app/components/roles/administrador/administrador.component';
import { FooterComponent } from '../app/components/footer/footer.component';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { LoginComponent } from '../app/components/login/login.component';
import { AgregarMarcadorComponent } from './components/acciones/agregar-marcador/agregar-marcador.component';
import { AgregarUsuarioComponent } from './components/acciones/agregar-usuario/agregar-usuario.component';
import { AdministradorFComponent } from './components/roles/administrador-f/administrador-f.component';
import { PruebaComponent } from './components/acciones/prueba/prueba.component';
import { CoordinadorComponent } from './components/roles/coordinador/coordinador.component';
import { EncargadoPlayasComponent } from './components/roles/encargado-playas/encargado-playas.component';
import { SocorristaComponent } from './components/roles/socorrista/socorrista.component';


const app_routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path : 'menu', component: AdministradorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'agregarmarcador', component: AgregarMarcadorComponent},
  {path: 'agregarusuario', component: AgregarUsuarioComponent},
  {path: 'administrador-f', component: AdministradorFComponent},
  {path: 'prueba', component: PruebaComponent},
  {path: 'coordinador', component: CoordinadorComponent},
  {path: 'encargado', component: EncargadoPlayasComponent},
  {path: 'socorrista', component: SocorristaComponent},


  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
