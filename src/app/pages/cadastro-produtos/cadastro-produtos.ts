import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutoService } from '../../services/produto';

@Component({  
  imports: [RouterLink],
  selector: 'app-cadastro-produtos',
  styleUrl: './cadastro-produtos.css',
  templateUrl: './cadastro-produtos.html',
})
export class CadastroProdutos {

  constructor(private produtoService: ProdutoService) {}


cadastrarProduto(
  nome: string,
  preco: string,
  quantidade: string,
  categoria: string
) {
  if (
    !nome.trim() ||
    !categoria.trim() ||
    preco === '' ||
    quantidade === '' ||
    Number(preco) < 0 ||
    Number(quantidade) < 0 ||
    !Number.isFinite(Number(preco)) ||
    !Number.isInteger(Number(quantidade))
  ) {
    alert('Preencha todos os campos corretamente!');
    return;
  }

  const produto = new Produto(
    nome,
    Number(preco),
    Number(quantidade),
    categoria
  );

  this.produtoService.adicionarProduto(produto).subscribe({
    next: () => alert('Produto cadastrado com sucesso!'),
    error: (erro: unknown) => {
      console.error('Erro ao cadastrar produto:', erro);
      alert('Não foi possível cadastrar o produto. Verifique se a API está ligada.');
    }
  });
}

}

export class Produto {

  id?: number;
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