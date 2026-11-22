import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarrinhoService } from '../../services/carrinho.services';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  constructor(public carrinhoService: CarrinhoService) {}

  categorias = [
    {
      nome: 'Promoções',
      produtos: [
        {
          id: 1,
          nome: 'Violão Fender CN60S',
          preco: 1299.90,
          imagem: 'https://serenata.vteximg.com.br/arquivos/ids/3127462-550-550/VIOLAO-FENDER-CN60S-NATURAL_IMG2.jpg?v=639178221155530000'
        },
        {
          id: 2,
          nome: 'Guitarra Stratocaster Vermelha',
          preco: 899.90,
          imagem: 'https://images.tcdn.com.br/img/img_prod/1433778/guitarra_eletrica_6_cordas_strato_hss_vermelha_str_240hss_rd_sonoros_8219_1_b4dc9f8eb374594cc4ea7b813a78482a.jpg'
        },
        {
          id: 3,
          nome: 'Instrumento Musical',
          preco: 349.90,
          imagem: 'https://cdn.awsli.com.br/2500x2500/1874/1874008/produto/307575645/gfruse-g6yadu7nny.jpg'
        }
      ]
    },
    {
      nome: 'Mais Vendidos',
      produtos: [
        {
          id: 4,
          nome: 'Acessório Musical',
          preco: 199.90,
          imagem: 'https://cdn.awsli.com.br/800x800/395/395433/produto/16957308/9c2689c69d.jpg'
        },
        {
          id: 5,
          nome: 'Capotraste para Violão',
          preco: 39.90,
          imagem: 'https://cdn.awsli.com.br/554/554104/produto/317514929/8036-capotraste-para-viol-o-smart-prata-jx-32-t3h25l2tg4.jpg'
        }
      ]
    },
    {
      nome: 'Acabaram de Chegar',
      produtos: [
        {
          id: 6,
          nome: 'Instrumento Musical Novo',
          preco: 259.90,
          imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreRDwO-VJxVy9z6F04RBgZALVa-m5NFOJFeqo-ygABGIzVKEYzyR036g8&s=10'
        },
        {
          id: 7,
          nome: 'Clarinete Yamaha YCL255',
          preco: 3499.90,
          imagem: 'https://images.tcdn.com.br/img/img_prod/757946/clarinete_yamaha_ycl255_si_bemol_bb_7443_1_09ed08a16d9af01beb58524ad1f3db0e.png'
        },
        {
          id: 8,
          nome: 'Pandeiro Gope 10 Pol Madeira Pele Nylon',
          preco: 170.90,
          imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_696860-MLA115964317770_092026-F.webp'
        }
      ]
    }
  ];

  adicionarAoCarrinho(produto: any) {
    this.carrinhoService.adicionarProduto(produto);

    alert('Produto adicionado ao carrinho!');
  }
}


