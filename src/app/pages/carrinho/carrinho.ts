import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarrinhoService } from '../../services/carrinho.services';

@Component({
  selector: 'app-carrinho',
  imports: [CommonModule, RouterLink],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})
export class Carrinho {

  constructor(public carrinhoService: CarrinhoService) { }

  finalizarCompra() {
    if(this.carrinhoService.produtos.length === 0){
      alert("Seu carrinho está vazio")
      return
    }

    alert('Compra finalizada com sucesso!');
  }
}