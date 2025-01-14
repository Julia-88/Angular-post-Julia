import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'create', component: CreateComponent },
    { path: 'detail', component: DetailComponent },
    { path: 'detail/:id', component: DetailComponent },
];
