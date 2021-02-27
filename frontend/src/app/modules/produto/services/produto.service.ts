import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/dominio/categoria';
import { TipoSituacao } from 'src/app/dominio/tipo-situacao';
import { environment } from 'src/environments/environment';
import { Produto } from '../../../dominio/produto';

@Injectable()
export class ProdutoService {

  url = `${environment.apiUrl}/produtos`;
  urlCategoria = `${environment.apiUrl}/categorias`;
  urlTipoSituacao = `${environment.apiUrl}/tipossituacao`;

  constructor(private http: HttpClient) { }

  buscarProdutoPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.url}/${id}`);
  }

  buscarTodosProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.url}`);
  }

  buscarTodasCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.urlCategoria}`);
  }

  buscarTodasSituacoes(): Observable<TipoSituacao[]> {
    return this.http.get<TipoSituacao[]>(`${this.urlTipoSituacao}`);
  }

  salvarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, produto);
  }

  editarProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(this.url, produto);
  }

  deletarProduto(id: number): Observable<Produto> {
    return this.http.delete<Produto>(`${this.url}/${id}`);
  }
}
