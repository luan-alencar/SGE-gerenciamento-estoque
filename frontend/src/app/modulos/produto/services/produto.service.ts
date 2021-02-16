import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/dominio/categoria';
import { Produto } from 'src/app/dominio/produto';
import { TipoSituacao } from 'src/app/dominio/tipo-situacao';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProdutoService {

  urlProduto = `${environment.apiUrl}/produtos`;
  urlCategoria = `${environment.apiUrl}/categorias`;
  urlTipoSituacao = `${environment.apiUrl}/tipossituacao`;

  constructor(private http: HttpClient) { }

  buscarProdutoPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.urlProduto}/${id}`);
  }

  buscarTodosProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.urlProduto}`);
  }

  buscarTodasCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.urlCategoria}`);
  }

  buscarTodasSituacoes(): Observable<TipoSituacao[]> {
    return this.http.get<TipoSituacao[]>(`${this.urlTipoSituacao}`);
  }

  salvarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.urlProduto, produto)
  }

  editarProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(this.urlProduto, produto);
  }

  deletarProduto(id: number): Observable<Produto> {
    return this.http.delete<Produto>(`${this.urlProduto}/${id}`);
  }
}
