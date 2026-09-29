import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Carrinho } from './pages/carrinho/carrinho';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path: 'login', component: Login},
    {path: 'carrinho', component: Carrinho},
    {path: '', component: Home}
];
