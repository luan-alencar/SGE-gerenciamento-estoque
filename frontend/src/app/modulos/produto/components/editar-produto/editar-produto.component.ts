import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from './../../../../dominio/produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  produto = new Produto();
  formularioEdicao: boolean;
  exibirDialog = false;
  produtos: Produto[] = [];

  constructor(
    private produtoServico: ProdutoService
  ) { }

  ngOnInit(): void {
    this.buscarProduto();
  }

  fecharDialog() {
    this.exibirDialog = false;
    this.buscarProduto();
  }
  buscarProduto() {
    this.produtoServico.buscarTodosProdutos()
      .subscribe((produto => {
        this.produtos = produto;
      }));
  }
}
