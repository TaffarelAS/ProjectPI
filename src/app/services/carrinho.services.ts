
import { Injectable } from '@angular/core';

export interface ProdutoCarrinho {
  id: number;
  nome: string;
  preco: number;
  categoria?: string;
  imagem?: string;
  quantidade?: number;
  quantidadeCarrinho: number;
}

@Injectable({
  providedIn: 'root'
})

export class CarrinhoService {

  produtos: ProdutoCarrinho[] = [];

  adicionarProduto(produto: Omit<ProdutoCarrinho, 'quantidadeCarrinho'>) {

    const produtoExistente = this.produtos.find(p => p.id === produto.id);

    if (produtoExistente) {
      produtoExistente.quantidadeCarrinho++;
    } else {
      this.produtos.push({
        ...produto,
        quantidadeCarrinho: 1
      });
    }
  }

  aumentarQuantidade(index: number) {
    this.produtos[index].quantidadeCarrinho++;
  }

  diminuirQuantidade(index: number) {
    if (this.produtos[index].quantidadeCarrinho > 1) {
      this.produtos[index].quantidadeCarrinho--;
    }
  }

  removerProduto(index: number) {
    this.produtos.splice(index, 1);
  }

  calcularTotal() {

    let total = 0;
    
    for (let produto of this.produtos) {
      total += produto.preco * produto.quantidadeCarrinho;
    }

    return total;
  }

  calcularQuantidade() {

    let total = 0;

    for (let produto of this.produtos) {
      total += produto.quantidadeCarrinho;
    }

    return total;
  }
}

