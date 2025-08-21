import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { RoomList } from './rooms/room-list/room-list';
import { App } from './app';

export const routes: Routes = [
    { path : '', component: App },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'rooms', component: RoomList } 
];
