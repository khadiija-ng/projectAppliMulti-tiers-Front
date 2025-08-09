import { Routes } from '@angular/router';
import { ConcoursList } from './concours-list/concours-list';
import { Homepage } from './homepage/homepage';
import { Etablissement } from './etablissement/etablissement';
import { Register } from './register/register';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    {path: '', component: Homepage},
    {path: 'concours', component: ConcoursList},
    {path: 'etablissement', component: Etablissement},
    {path: 'register', component: Register},
    {path: 'login', component: Login},
    {path: 'dashboard', component: Dashboard},



];
