
import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.services';
import { CarrinhoService } from '../../services/carrinho.services';

@Component({
  imports: [RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  private service = inject(ClienteService);
  private router = inject(Router);
  private carrinhoService = inject(CarrinhoService);

  mensagem = '';

  entrar() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const senha = (document.getElementById('senha') as HTMLInputElement).value;

    if (email === 'admin@teste.com' && senha === '1234') {
      localStorage.setItem('isAdmin', 'true');
      localStorage.removeItem('clienteId');
      this.carrinhoService.carregarCarrinho(null);
      this.router.navigate(['/home']);
      return;
    }

    this.service.listar().subscribe({
      next: (clientes) => {
        const cliente = clientes.find(
          usuario => usuario.email === email && usuario.senha === senha
        );

        if (!cliente) {
          this.mensagem = 'E-mail ou senha incorretos.';
          return;
        }

        localStorage.setItem('clienteId', cliente.id!);
        localStorage.setItem('isAdmin', 'false');
        
        this.carrinhoService.carregarCarrinho(cliente.id!);
        this.router.navigate(['/home']);
      },
      error: () => {
        this.mensagem = 'Erro ao conectar com o servidor.';
      }
    });
  }
}
