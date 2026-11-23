
import { Component, OnInit, inject, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { VendaService } from '../../services/venda.services';
import { Venda } from '../../model/venda';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-pedidos',
  styleUrl: './pedidos.css',
  templateUrl: './pedidos.html',
})
export class Pedidos implements OnInit {

  private vendaService = inject(VendaService);
  private cdr = inject(ChangeDetectorRef);

  vendas: Venda[] = [];
  carregando = true;
  mensagem = '';

  ngOnInit() {

    const clienteId = localStorage.getItem('clienteId');
    

    if (!clienteId) {
      this.mensagem = 'Faça login para visualizar seus pedidos.';
      this.carregando = false;
      return;
    }

    this.vendaService.buscarPorCliente(clienteId).subscribe({

      next: (vendas) => {
        this.vendas = vendas;
        this.carregando = false;
        this.cdr.detectChanges();
      },

      error: () => {
      this.mensagem = 'Não foi possível carregar seus pedidos.';
      this.carregando = false;
      this.cdr.detectChanges();
    }

    });

  }
}
