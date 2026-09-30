import { Component } from '@angular/core';
import { ProdutoService } from '../../services/produto';

@Component({
  imports: [],
  selector: 'app-cadastro-produto',
  styleUrl: './cadastro-produto.css',
  templateUrl: './cadastro-produto.html',
})
export class CadastroProduto {

  constructor(private produtoService: ProdutoService) {}

  cadastrarProduto(
    nome: string,
    preco: string,
    quantidade: string,
    categoria: string
  ) {

    const produto = new Produto(
      nome,
      parseFloat(preco),
      parseInt(quantidade),
      categoria
    );

    this.produtoService.produtos.push(produto);

    console.log(this.produtoService.produtos);
  }

}

export class Produto {

  nome: string;
  preco: number;
  quantidade: number;
  categoria: string;

  constructor(
    nome: string,
    preco: number,
    quantidade: number,
    categoria: string
  ) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.categoria = categoria;
  }

}