import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { ServicesComponent } from './pages/services.component';
import { ProductsComponent } from './pages/products.component';
import { ProjectsComponent } from './pages/projects.component';
import { ContactComponent } from './pages/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'AMPERE AUTOMATION | Home' },
  { path: 'about', component: AboutComponent, title: 'About Us | AMPERE AUTOMATION' },
  { path: 'services', component: ServicesComponent, title: 'Services | AMPERE AUTOMATION' },
  { path: 'products', component: ProductsComponent, title: 'Products | AMPERE AUTOMATION' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects | AMPERE AUTOMATION' },
  { path: 'contact', component: ContactComponent, title: 'Contact | AMPERE AUTOMATION' },
  { path: '**', redirectTo: '' }
];
