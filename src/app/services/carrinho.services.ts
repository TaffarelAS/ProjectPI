import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  produtos: any[] = [];

  adicionarProduto(produto: any) {
    this.produtos.push({
      ...produto,
      quantidade: 1
    });
  }

  aumentarQuantidade(index: number) {
    this.produtos[index].quantidade++;
  }

  diminuirQuantidade(index: number) {
    if (this.produtos[index].quantidade > 1) {
      this.produtos[index].quantidade--;
    }
  }

  removerProduto(index: number) {
    this.produtos.splice(index, 1);
  }

  calcularTotal() {
    let total = 0;

    for (let produto of this.produtos) {
      total += produto.preco * produto.quantidade;
    }

    return total;
  }
}