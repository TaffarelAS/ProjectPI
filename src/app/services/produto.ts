import { Injectable } from '@angular/core';
import { Produto } from '../pages/cadastro-produtos/cadastro-produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtos: Produto[] = [];

}