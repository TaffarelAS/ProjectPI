import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting
} from '@angular/common/http/testing';
import { Produto } from '../pages/cadastro-produtos/cadastro-produtos';
import { ProdutoService } from './produto';

describe('ProdutoService', () => {
  let service: ProdutoService;
  let http: HttpTestingController;
  const api = 'http://localhost:3000/produtos';
  const produto: Produto = new Produto('Violão', 100, 2, 'Cordas');

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(ProdutoService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('lista os produtos', () => {
    service.listar().subscribe(produtos => {
      expect(produtos).toEqual([{ ...produto, id: 1 }]);
    });

    const request = http.expectOne(api);
    expect(request.request.method).toBe('GET');
    request.flush([{ ...produto, id: 1 }]);
  });

  it('consulta um produto pelo id', () => {
    service.consultar(1).subscribe(resultado => {
      expect(resultado.nome).toBe('Violão');
    });

    const request = http.expectOne(`${api}/1`);
    expect(request.request.method).toBe('GET');
    request.flush({ ...produto, id: 1 });
  });

  it('cadastra um produto', () => {
    service.adicionarProduto(produto).subscribe(resultado => {
      expect(resultado.id).toBe(1);
    });

    const request = http.expectOne(api);
    expect(request.request.method).toBe('POST');
    request.flush({ ...produto, id: 1 });
  });

  it('atualiza um produto', () => {
    service.editarProduto(1, produto).subscribe(resultado => {
      expect(resultado.nome).toBe('Violão');
    });

    const request = http.expectOne(`${api}/1`);
    expect(request.request.method).toBe('PUT');
    request.flush({ ...produto, id: 1 });
  });

  it('exclui um produto', () => {
    service.excluirProduto(1).subscribe();

    const request = http.expectOne(`${api}/1`);
    expect(request.request.method).toBe('DELETE');
    request.flush(null);
  });
});
