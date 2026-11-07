
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutoService } from '../../services/produto';
import { Produto } from '../cadastro-produtos/cadastro-produtos';

@Component({
  selector: 'app-tabel-prods',
  imports: [RouterLink],
  templateUrl: './tabel-prods.html',
  styleUrl: './tabel-prods.css'
})
export class TabelProds implements OnInit {

  constructor(public produtoService: ProdutoService) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  private carregarProdutos() {
    this.produtoService.listar().subscribe({
      next: produtos => this.produtoService.produtos = produtos,
      error: (erro: unknown) => {
        console.error('Erro ao listar produtos:', erro);
        alert('Não foi possível carregar os produtos. Verifique se a API está ligada.');
      }
    });
  }

  excluirProduto(produto: Produto) {
    const confirmar = confirm(
      `Deseja excluir o produto ${produto.nome}?`
    );

    if (confirmar) {
      if (produto.id === undefined) {
        alert('Não foi possível identificar este produto para exclusão.');
        return;
      }

      this.produtoService.excluirProduto(produto.id).subscribe({
        next: () => {
          this.produtoService.produtos =
            this.produtoService.produtos.filter(p => p.id !== produto.id);
        },
        error: (erro: unknown) => {
          console.error('Erro ao excluir produto:', erro);
          alert('Não foi possível excluir o produto.');
        }
      });
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

    if (produto.id === undefined) {
      alert('Não foi possível identificar este produto para edição.');
      return;
    }

    const produtoAtualizado = new Produto(
      nome,
      Number(preco),
      Number(quantidade),
      categoria
    );

    this.produtoService.editarProduto(produto.id, produtoAtualizado).subscribe({
      next: atualizado => {
        const index = this.produtoService.produtos.findIndex(p => p.id === atualizado.id);
        if (index !== -1) {
          this.produtoService.produtos[index] = atualizado;
        }
        alert('Produto editado com sucesso!');
      },
      error: (erro: unknown) => {
        console.error('Erro ao editar produto:', erro);
        alert('Não foi possível editar o produto.');
      }
    });
  }
}