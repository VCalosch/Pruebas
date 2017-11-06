import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';


const app_routes: Routes = [
{ path: 'navbar', component: NavbarComponent},
{ path: 'footer', component: FooterComponent},
{ path: 'home', component: HomeComponent},
{ path: '**', pathMatch: 'full', redirectTo: 'navbar' }
];

export const app_routing = RouterModule.forRoot(app_routes);
