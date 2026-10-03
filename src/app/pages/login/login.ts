import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  mensagem = '';

  usuarios = [
    {
      email: 'admin@teste.com',
      senha: '1234',
      admin: true
    },
    {
      email: 'usuario1@teste.com',
      senha: '1234',
      admin: false
    },
    {
      email: 'usuario2@teste.com',
      senha: '1234',
      admin: false
    }
  ];

  entrar() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const senha = (document.getElementById('senha') as HTMLInputElement).value;

    const usuariosCadastrados = JSON.parse(
      localStorage.getItem('usuarios') || '[]'
    );

    const todosUsuarios = [
      ...this.usuarios,
      ...usuariosCadastrados
    ];

    const usuario = todosUsuarios.find(
      usuario => usuario.email === email && usuario.senha === senha
    );

    if (!usuario) {
      this.mensagem = 'E-mail ou senha incorretos.';
      return;
    }

    if (usuario.admin) {
      this.mensagem = 'Usuário administrador.';
    } else {
      this.mensagem = 'Usuário comum.';
    }
  }
}
