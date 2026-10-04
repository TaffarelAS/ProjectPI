
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-carrinho',
  imports: [CommonModule],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Guitarra Elétrica Tagima - Vermelha',
      preco: 739.45,
      quantidade: 1
    },
    {
      id: 2,
      nome: 'Violão clássico/acústico de cordas de nylon',
      preco: 450,
      quantidade: 1
    },
    {
      id: 3,
      nome: 'Kit de palhetas para guitarra/violão',
      preco: 23.90,
      quantidade: 2
    }
  ];

  get total(): number {
    return this.produtos.reduce(
      (soma, produto) =>
        soma + produto.preco * produto.quantidade,
      0
    );
  }


  finalizarCompra(): void {
    alert('Compra encaminhada para finalização!');
  }
}