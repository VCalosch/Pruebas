import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';



const app_routes: Routes = [
{ path: 'navbar', component: NavbarComponent},
{ path: 'footer', component: FooterComponent},
{ path: 'home', component: HomeComponent},
{ path: 'login', component: LoginComponent},
{ path: '**', pathMatch: 'full', redirectTo: 'navbar' }
];

export const app_routing = RouterModule.forRoot(app_routes);
