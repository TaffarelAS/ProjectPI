import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Carrinho } from './pages/carrinho/carrinho';
import { Home } from './pages/home/home';
import { CadastroProdutos } from './pages/cadastro-produtos/cadastro-produtos';
import { TabelProds } from './pages/tabel-prods/tabel-prods';
import { Montador } from './pages/montador/montador';
import { ClientesCadastro } from './pages/clientes-cadastro/clientes-cadastro/clientes-cadastro';
import { AdminClientes } from './pages/admin-clientes/admin-clientes';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'carrinho', component: Carrinho },
  { path: 'home', component: Home },
  { path: '', component: Home },
  { path: 'cadastro-produtos', component: CadastroProdutos },
  { path: 'tabel-prods', component: TabelProds },
  { path: 'montar', component: Montador },
  { path: 'admin-clientes-listar', component: AdminClientes },
  { path: 'cliente-cadastro', component: ClientesCadastro },
  { path: 'admin-clientes-editar/:id', component: ClientesCadastro }
];