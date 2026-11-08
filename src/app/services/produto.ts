
import { Injectable, signal } from '@angular/core';
import { Produto } from '../pages/cadastro-produtos/cadastro-produtos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // O json-server publica a coleção "produtos" do backend/db.json nesta URL.
  // A API deve estar em execução na porta 3000 para que as operações abaixo funcionem.
  private readonly API = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) { }

  // Cada método encapsula uma operação HTTP da coleção: GET (listar/consultar),
  // POST (cadastrar), PUT (substituir os dados de um produto) e DELETE (excluir).
  // Os Observables são assíncronos; os componentes assinam para iniciar a requisição
  // e tratar separadamente as respostas de sucesso e de erro.
  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API);
  }

  consultar(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.API}/${id}`);
  }

  adicionarProduto(produto: Omit<Produto, 'id'>): Observable<Produto> {
    return this.http.post<Produto>(this.API, produto);
  }

  editarProduto(
    id: number,
    produto: Omit<Produto, 'id'>
  ): Observable<Produto> {
    return this.http.put<Produto>(`${this.API}/${id}`, produto);
  }

  excluirProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }

  // Estado compartilhado da lista exibida na tabela. Alterações feitas com set/update
  // notificam o Angular para atualizar a interface sem recarregar a página.
  readonly produtos = signal<Produto[]>([]);
}