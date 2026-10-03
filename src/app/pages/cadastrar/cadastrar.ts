import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-cadastrar',
  styleUrl: './cadastrar.css',
  templateUrl: './cadastrar.html',
})
export class Cadastrar {

  mensagem = '';

  cadastrar() {

    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const senha = (document.getElementById('senha') as HTMLInputElement).value;
    const confirmarSenha = (document.getElementById('confirmarSenha') as HTMLInputElement).value;

    if (!nome || !email || !senha || !confirmarSenha) {
      this.mensagem = 'Preencha todos os campos.';
      return;
    }

    if (senha !== confirmarSenha) {
      this.mensagem = 'As senhas não são iguais.';
      return;
    }

    const usuarios = JSON.parse(
      localStorage.getItem('usuarios') || '[]'
    );

    const usuarioExiste = usuarios.find(
      (usuario: any) => usuario.email === email
    );

    if (usuarioExiste) {
      this.mensagem = 'Este e-mail já está cadastrado.';
      return;
    }

    const novoUsuario = {
      nome: nome,
      email: email,
      senha: senha,
      admin: false
    };

    usuarios.push(novoUsuario);

    localStorage.setItem(
      'usuarios',
      JSON.stringify(usuarios)
    );

    this.mensagem = 'Usuário cadastrado com sucesso.';
  }
}
