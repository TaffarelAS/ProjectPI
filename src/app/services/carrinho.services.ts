
import { Injectable } from '@angular/core';

export interface ProdutoCarrinho {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  quantidade: number;
  imagem?: string;
  quantidadeCarrinho: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  produtos: ProdutoCarrinho[] = [];
  private chaveCarrinho: string;

  constructor() {
    this.chaveCarrinho = this.obterChave(localStorage.getItem('clienteId'));
    this.carregarCarrinho(localStorage.getItem('clienteId'));
  }

  private obterChave(clienteId: string | null): string {
    return clienteId ? `carrinho_${clienteId}` : 'carrinho_visitante';
  }

  carregarCarrinho(clienteId: string | null) {
    this.chaveCarrinho = this.obterChave(clienteId);

    const dadosSalvos = localStorage.getItem(this.chaveCarrinho);

    this.produtos = dadosSalvos ? JSON.parse(dadosSalvos) : [];
  }

  salvarCarrinho() {
    localStorage.setItem(this.chaveCarrinho, JSON.stringify(this.produtos));
  }

  adicionarProduto(produto: Omit<ProdutoCarrinho, 'quantidadeCarrinho'>): boolean {

    const existente = this.produtos.find(p => p.id === produto.id);

    if (produto.quantidade <= 0) {
      return false;
    }

    if (existente) {
      if (existente.quantidadeCarrinho >= produto.quantidade) {
        return false;
      }
      existente.quantidadeCarrinho++;
      
    } else {
      this.produtos.push({ ...produto, quantidadeCarrinho: 1 });
    }

    this.salvarCarrinho();
    return true;
  }

  aumentarQuantidade(index: number) {
    const produto = this.produtos[index];

    if (produto.quantidadeCarrinho < produto.quantidade) {
      produto.quantidadeCarrinho++;
      this.salvarCarrinho();
    }
  }

  diminuirQuantidade(index: number) {
    if (this.produtos[index].quantidadeCarrinho > 1) {
      this.produtos[index].quantidadeCarrinho--;
      this.salvarCarrinho();
    }
  }

  removerProduto(index: number) {
    this.produtos.splice(index, 1);
    this.salvarCarrinho();
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

  quantidadeNoCarrinho(id: number) {
    const produto = this.produtos.find(p => p.id === id);
    return produto ? produto.quantidadeCarrinho : 0;
  }

  atualizarEstoque(produtos: { id?: number; quantidade: number }[]) {
    for (let produto of this.produtos) {
      const atualizado = produtos.find(p => p.id === produto.id);
      
      if (atualizado) {
        produto.quantidade = atualizado.quantidade;
      }
    }
    
    this.salvarCarrinho();
  }
}
