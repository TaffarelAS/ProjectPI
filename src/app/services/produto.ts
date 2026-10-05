
import { Injectable } from '@angular/core';
import { Produto } from '../pages/cadastro-produtos/cadastro-produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtos: Produto[] = [];

  adicionarProduto(produto: Produto) {
    this.produtos.push(produto);
  }

  excluirProduto(produto: Produto) {
    this.produtos = this.produtos.filter(
      p => p !== produto
    );
  }

  editarProduto(
    produtoAntigo: Produto,
    produtoNovo: Produto
  ) {
    const index = this.produtos.indexOf(produtoAntigo);

    if (index !== -1) {
      this.produtos[index] = produtoNovo;
    }
  }
}

export { Produto };
