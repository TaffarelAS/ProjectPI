
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { CarrinhoService } from '../../services/carrinho.services';
import { ProdutoService } from '../../services/produto';
import { VendaService } from '../../services/venda.services';
import { Venda } from '../../model/venda';

@Component({
  selector: 'app-carrinho',
  imports: [CommonModule, RouterLink],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})
export class Carrinho {

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router,
    private produtoService: ProdutoService,
    private vendaService: VendaService
  ) { }

  finalizarCompra() {

    if (this.carrinhoService.produtos.length === 0) {
      alert("Seu carrinho está vazio");
      return;
    }

    const clienteId = localStorage.getItem('clienteId');

    if (!clienteId || localStorage.getItem('isAdmin') === 'true') {
      alert('Você precisa entrar como cliente para finalizar a compra.');
      this.router.navigate(['/login']);
      return;
    }

    this.produtoService.listar().subscribe({

      next: (produtos) => {

        const atualizacoes = [];

        for (let item of this.carrinhoService.produtos) {

          const produto = produtos.find(p => p.id === item.id);

          if (!produto || produto.quantidade < item.quantidadeCarrinho) {
            alert('Estoque insuficiente para: ' + item.nome);
            return;
          }

          atualizacoes.push(
            this.produtoService.editarProduto(item.id, {
              nome: produto.nome,
              preco: produto.preco,
              quantidade: produto.quantidade - item.quantidadeCarrinho,
              categoria: produto.categoria,
              imagem: produto.imagem
            })
          );

        }

        forkJoin(atualizacoes).subscribe({

          next: () => {

            const venda: Venda = {
              clienteId: clienteId,
              data: new Date().toISOString(),
              produtos: this.carrinhoService.produtos.map(item => ({
                produtoId: item.id,
                nome: item.nome,
                preco: item.preco,
                quantidade: item.quantidadeCarrinho
              })),
              total: Number(this.carrinhoService.calcularTotal().toFixed(2))
            };

            this.vendaService.registrar(venda).subscribe({

              next: () => {
                this.carrinhoService.produtos = [];
                this.carrinhoService.salvarCarrinho();

                alert('Compra finalizada com sucesso!');
                this.router.navigate(['/home']);
              },

              error: () => {
                alert('O estoque foi atualizado, mas não foi possível registrar a venda.');
              }

            });

          },

          error: () => {
            alert('Não foi possível atualizar o estoque.');
          }

        });

      },

      error: () => {
        alert('Não foi possível consultar o estoque.');
      }

    });

  }
}
