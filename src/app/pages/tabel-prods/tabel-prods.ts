
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
    // Carrega os produtos salvos sempre que a página é aberta ou recarregada.
    this.carregarProdutos();
  }

  private carregarProdutos() {
    this.produtoService.listar().subscribe({
      // Substitui o estado local pelos dados persistidos retornados pela API.
      next: produtos => this.produtoService.produtos.set(produtos),
      error: (erro: unknown) => {
        // Não esconde falhas de conexão, como a API estar desligada.
        console.error('Erro ao listar produtos:', erro);
        alert('Não foi possível carregar os produtos. Verifique se a API está ligada.');
      }
    });
  }

  excluirProduto(produto: Produto) {
    // Pede confirmação antes de remover permanentemente o registro do banco de dados.
    const confirmar = confirm(
      `Deseja excluir o produto ${produto.nome}?`
    );

    if (confirmar) {
      if (produto.id === undefined) {
        // A API precisa do ID para identificar qual registro deve ser excluído.
        alert('Não foi possível identificar este produto para exclusão.');
        return;
      }

      this.produtoService.excluirProduto(produto.id).subscribe({
        next: () => {
          // Atualiza a lista reativa somente depois da confirmação da API; assim,
          // a linha não desaparece da tela se a exclusão no servidor falhar.
          this.produtoService.produtos.update(
            produtos => produtos.filter(p => p.id !== produto.id)
          );
        },
        error: (erro: unknown) => {
          console.error('Erro ao excluir produto:', erro);
          alert('Não foi possível excluir o produto.');
        }
      });
    }
  }

  editarProduto(produto: Produto) {
    // Cada prompt começa com o valor atual. Se a pessoa cancelar qualquer etapa,
    // a função termina sem enviar alterações para a API.
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
      // Impede o envio de campos vazios, valores não numéricos, preço negativo
      // ou quantidade negativa/fracionária.
      alert('Preencha os dados corretamente!');
      return;
    }

    if (produto.id === undefined) {
      // O ID identifica o registro que será atualizado e não pode estar ausente.
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
        // O PUT envia os novos campos para o registro identificado pelo ID.
        // Após o sucesso, substitui somente a linha correspondente pela resposta da API.
        this.produtoService.produtos.update(
          produtos => produtos.map(p => p.id === atualizado.id ? atualizado : p)
        );
        alert('Produto editado com sucesso!');
      },
      error: (erro: unknown) => {
        console.error('Erro ao editar produto:', erro);
        alert('Não foi possível editar o produto.');
      }
    });
  }
}