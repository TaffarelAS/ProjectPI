
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutoService } from '../../services/produto';
import { Produto } from '../cadastro-produtos/cadastro-produtos';

@Component({
  selector: 'app-tabel-prods',
  imports: [RouterLink],
  templateUrl: './tabel-prods.html',
  styleUrl: './tabel-prods.css'
})
export class TabelProds {

  constructor(public produtoService: ProdutoService) {}

  excluirProduto(produto: Produto) {
    const confirmar = confirm(
      `Deseja excluir o produto ${produto.nome}?`
    );

    if (confirmar) {
      this.produtoService.excluirProduto(produto);
    }
  }

  editarProduto(produto: Produto) {
    const nome = prompt('Novo nome:', produto.nome);
    if (nome === null) return;

    const preco = prompt('Novo preço:', String(produto.preco));
    if (preco === null) return;

    const quantidade = prompt(
      'Nova quantidade:',
      String(produto.quantidade)
    );
    if (quantidade === null) return;

    const categoria = prompt(
      'Nova categoria:',
      produto.categoria
    );
    if (categoria === null) return;

    if (
      !nome.trim() ||
      !categoria.trim() ||
      preco.trim() === '' ||
      quantidade.trim() === '' ||
      !Number.isFinite(Number(preco)) ||
      Number(preco) < 0 ||
      !Number.isInteger(Number(quantidade)) ||
      Number(quantidade) < 0
    ) {
      alert('Preencha os dados corretamente!');
      return;
    }

    const produtoAtualizado = new Produto(
      nome,
      Number(preco),
      Number(quantidade),
      categoria
    );

    this.produtoService.editarProduto(
      produto,
      produtoAtualizado
    );

    alert('Produto editado com sucesso!');
  }
}