import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venda } from '../model/venda';

@Injectable({
  providedIn: 'root'
})

export class VendaService {

  private vendasAPI = 'http://localhost:3000/vendas';
  private httpClient = inject(HttpClient);

  registrar(venda: Venda): Observable<Venda> {
    return this.httpClient.post<Venda>(this.vendasAPI, venda);
  }

  buscarPorCliente(clienteId: string): Observable<Venda[]> {
    return this.httpClient.get<Venda[]>(`${this.vendasAPI}?clienteId=${clienteId}`);
  }
}