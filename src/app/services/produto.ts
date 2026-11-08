
import { Injectable, signal } from '@angular/core';
import { Produto } from '../pages/cadastro-produtos/cadastro-produtos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly API = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) { }

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

  readonly produtos = signal<Produto[]>([]);
}