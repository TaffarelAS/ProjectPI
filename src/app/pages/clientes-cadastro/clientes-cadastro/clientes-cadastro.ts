import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Cliente } from '../../../model/cliente';
import { ClienteService } from '../../../services/cliente.services';

@Component({
  selector: 'app-clientes-cadastro',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './clientes-cadastro.html',
  styleUrl: './clientes-cadastro.css'
})
export class ClientesCadastro implements OnInit {
  private service = inject(ClienteService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  cliente: Cliente = {
    nome: '',
    email: '',
    senha: ''
  };

  confirmarSenha = '';
  clienteId: string | null = this.route.snapshot.paramMap.get('id');

  // Flag simples para o grupo plugar no login de admin depois:
  // Ex.: localStorage.setItem('isAdmin', 'true') ao logar como admin
  get isAdmin(): boolean {
    return localStorage.getItem('isAdmin') === 'true';
  }

  ngOnInit(): void {
    if (this.clienteId) {
      this.service.buscarPorId(this.clienteId).subscribe({
        next: (dados) => {
          this.cliente = dados;
          this.confirmarSenha = dados.senha || '';
        },
        error: () => {
          alert('Cliente não encontrado.');
        }
      });
    }
  }

  salvar(): void {
    if (!this.cliente.nome.trim() || !this.cliente.email.trim() || !this.cliente.senha.trim()) {
      alert('Preencha nome, email e senha!');
      return;
    }

    if (this.cliente.senha !== this.confirmarSenha) {
      alert('As senhas não são iguais.');
      return;
    }

    if (this.clienteId) {
      const clienteAtualizado: Cliente = {
        ...this.cliente,
        id: this.clienteId
      };

      this.service.editar(clienteAtualizado).subscribe({
        next: () => {
          alert('Cliente atualizado com sucesso!');
          this.router.navigate(['/admin-clientes-listar']);
        },
        error: () => {
          alert('Erro ao alterar o cliente.');
        }
      });
    } else {
      const novoCliente: Cliente = {
        nome: this.cliente.nome.trim(),
        email: this.cliente.email.trim(),
        senha: this.cliente.senha
      };

      this.service.incluir(novoCliente).subscribe({
        next: (criado) => {
          alert(`Cliente ${criado.nome} cadastrado com sucesso!`);
          // Cliente comum vai pro login (ou troca para ['/home'] se preferir)
          this.router.navigate(['/login']);
        },
        error: () => {
          alert('Erro ao cadastrar o cliente.');
        }
      });
    }
  }
}