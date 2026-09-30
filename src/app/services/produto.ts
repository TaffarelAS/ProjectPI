import { Injectable } from '@angular/core';
import { Produto } from '../pages/cadastro-produto/cadastro-produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtos: Produto[] = [];

}