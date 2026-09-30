import { Component, Inject } from '@angular/core';
import { ProdutoService } from '../../services/produto';


@Component({
  imports: [],
  selector: 'app-tabel-prods',
  styleUrl: './tabel-prods.css',
  templateUrl: './tabel-prods.html',
})
export class TabelProds {

  constructor(@Inject(ProdutoService) public produtoService: ProdutoService) {

  }

}