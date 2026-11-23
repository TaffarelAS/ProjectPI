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

  // Os campos do formulário chegam como texto, mesmo quando representam números.
  // A validação impede nome/categoria vazios, preço negativo ou inválido e quantidade
  // negativa ou fracionária antes de converter os valores para o tipo numérico.
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

  // O serviço envia o novo produto por POST. A resposta é assíncrona: a mensagem de
  // sucesso só aparece quando a API confirma o cadastro; falhas são registradas no
  // console e também informadas à pessoa usuária.
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

  // O ID é opcional porque ainda não existe no momento do cadastro; a API o cria
  // e o devolve junto ao produto persistido.
  id?: number;
  nome: string;
  preco: number;
  quantidade: number;
  categoria: string;
  imagem?: string;
  
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