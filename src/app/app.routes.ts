import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { App } from './app';

export const routes: Routes = [
    { path : '', component: App },
    { path: 'login', component: Login },
    { path: 'register', component: Register }
];
