import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Carrinho } from './pages/carrinho/carrinho';
import { Home } from './pages/home/home';
import { CadastroProduto } from './pages/cadastro-produto/cadastro-produto';

export const routes: Routes = [
    {path: 'login', component: Login},
    {path: 'carrinho', component: Carrinho},
    {path: '', component: Home},
    {path: 'cadastro_produto', component: CadastroProduto},
    {path: 'tabel_prods', loadComponent: () => import('./pages/tabel-prods/tabel-prods').then(m => m.TabelProds)}
];
