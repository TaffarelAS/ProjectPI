
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ClienteService } from '../../services/cliente.services';

@Component({
  imports: [RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  private clienteService = inject(ClienteService);
  private router = inject(Router);

  mensagem = '';

  entrar() {
    const email = (
      document.getElementById('email') as HTMLInputElement
    ).value.trim().toLowerCase();

    const senha = (
      document.getElementById('senha') as HTMLInputElement
    ).value;

    if (!email || !senha) {
      this.mensagem = 'Preencha o e-mail e a senha.';
      return;
    }

    this.clienteService.listar().subscribe({
      next: (clientes) => {

        const usuario = clientes.find(
          cliente =>
            cliente.email.toLowerCase() === email &&
            cliente.senha === senha
        );

        if (!usuario) {
          this.mensagem = 'E-mail ou senha incorretos.';
          return;
        }

        localStorage.setItem('isAdmin', String(usuario.admin === true));

        localStorage.setItem('usuarioLogado', JSON.stringify({
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
          admin: usuario.admin === true
        }));

        this.mensagem = `Bem-vindo, ${usuario.nome}!`;

        if (usuario.admin === true) {
          this.router.navigate(['/admin-clientes-listar']);
        } else {
          this.router.navigate(['/home']);
        }
      },

      error: () => {
        this.mensagem = 'Erro ao conectar com o banco de dados.';
      }
    });
  }
}
