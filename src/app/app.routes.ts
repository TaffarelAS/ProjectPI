import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Carrinho } from './pages/carrinho/carrinho';
import { Home } from './pages/home/home';
import { Cadastrar } from './pages/cadastrar/cadastrar';

export const routes: Routes = [
    {path: 'login', component: Login},
    {path: 'carrinho', component: Carrinho},
    {path: 'cadastrar', component: Cadastrar},
    {path: '', component: Home}
];
