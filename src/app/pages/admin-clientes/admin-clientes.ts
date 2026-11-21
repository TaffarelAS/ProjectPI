import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.services';

@Component({
  selector: 'app-admin-clientes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-clientes.html',
  styleUrl: './admin-clientes.css'
})
export class AdminClientes implements OnInit {
  private service = inject(ClienteService);
  listaClientes = signal<Cliente[]>([]);

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.service.listar().subscribe({
      next: (clientes) => {
        this.listaClientes.set(clientes);
      },
      error: () => {
        alert('Erro ao carregar clientes da API.');
      }
    });
  }

  excluir(id?: string): void {
    if (!id) return;

    if (confirm('Deseja realmente excluir o cliente?')) {
      this.service.excluir(id).subscribe({
        next: () => {
          this.listaClientes.update(lista =>
            lista.filter(cliente => cliente.id !== id)
          );
        },
        error: () => {
          alert('Erro ao excluir cliente.');
        }
      });
    }
  }
}