import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { RoomList } from './components/rooms/room-list/room-list';
import { App } from './app';
import { Tenants } from './components/tenants/tenants';
import { InvoiceList } from './components/invoice-list/invoice-list';

export const routes: Routes = [
    { path : '', component: App },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'rooms', component: RoomList } ,
    { path: 'tenants', component: Tenants } ,
    { path: 'invoices', component: InvoiceList } ,
];
