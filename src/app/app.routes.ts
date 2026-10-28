import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Carrinho } from './pages/carrinho/carrinho';
import { Home } from './pages/home/home';
import { CadastroProdutos } from './pages/cadastro-produtos/cadastro-produtos';
import { TabelProds } from './pages/tabel-prods/tabel-prods';
import { Montador } from './pages/montador/montador';


export const routes: Routes = [
    {path: 'login', component: Login},
    {path: 'carrinho', component: Carrinho},
    {path: '', component: Home},
    {path: 'cadastro-produtos', component: CadastroProdutos},
    {path: 'tabel_prods', component: TabelProds},
    {path: 'montar', component: Montador}
];
