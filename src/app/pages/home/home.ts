
import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarrinhoService } from '../../services/carrinho.services';
import { ProdutoService } from '../../services/produto';
import { Produto } from '../cadastro-produtos/cadastro-produtos';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit {

  categorias: { nome: string; produtos: Produto[] }[] = [];

  constructor(
    public carrinhoService: CarrinhoService,
    private produtoService: ProdutoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {

    this.produtoService.listar().subscribe({
      next: (produtos) => {
        this.carrinhoService.atualizarEstoque(produtos);
        for (let produto of produtos) {
          let categoria = this.categorias.find(c => c.nome === produto.categoria);

          if (categoria) {
            categoria.produtos.push(produto);
          } else {
            this.categorias.push({
              nome: produto.categoria,
              produtos: [produto]
            });
          }
        }
        this.cdr.detectChanges();
        
      },
      error: () => {
        alert('Não foi possível carregar os produtos.');
      }
    });
  }

  adicionarAoCarrinho(produto: Produto) {
    if (produto.id === undefined) return;

    const adicionado = this.carrinhoService.adicionarProduto({
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      categoria: produto.categoria,
      quantidade: produto.quantidade,
      imagem: produto.imagem
    });

    if (adicionado) {
      alert('Produto adicionado ao carrinho!');
    } else {
      alert('Estoque insuficiente para adicionar mais unidades!');
    }
  }
}
