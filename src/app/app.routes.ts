import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { AdministradorComponent } from '../app/components/roles/administrador/administrador.component';
import { FooterComponent } from '../app/components/footer/footer.component';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { LoginComponent } from '../app/components/login/login.component';
import { AgregarMarcadorComponent } from './components/acciones/agregar-marcador/agregar-marcador.component';
import { AgregarUsuarioComponent } from './components/acciones/agregar-usuario/agregar-usuario.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path : 'administrador', component: AdministradorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'agregarmarcador', component: AgregarMarcadorComponent},
  {path: 'agregarusuario', component: AgregarUsuarioComponent},

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
