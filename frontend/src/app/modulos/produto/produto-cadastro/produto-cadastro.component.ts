import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Categoria } from 'src/app/dominio/categoria';

import { Produto } from 'src/app/dominio/produto';
import { TipoSituacao } from 'src/app/dominio/tipo-situacao';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class ProdutoCadastroComponent implements OnInit {

  formProduto: FormGroup;

  tipoSituacaoLista: TipoSituacao[] = [];
  tipoSituacao: TipoSituacao;

  categoria: Categoria;
  categorias: Categoria[] = [];

  @Input() produto = new Produto();

  @Input() edicao = false;

  display: boolean;

  constructor(

    private produtoService: ProdutoService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {

    this.buscarProdutos();
    this.buscarCategorias();

    this.route.params.subscribe(params => {
      if (params.id) {
        this.edicao = true;
        this.buscarProdutos();
      }
    });

    this.formProduto = this.fb.group({
      nome: '',
      preco: '',
      descricao: '',
      quantidade: '',
      tipoSituacao: '',
      categoria: ''
    });
  }

  showDialog() {
    this.display = true;
  }

  private buscarProdutos() {
    this.produtoService.buscarTodosProdutos();
  }

  buscarTipoSituacao() {
    this.produtoService.buscarTodasSituacoes()
      .subscribe((tipoSituacao: TipoSituacao[]) => {
        this.tipoSituacaoLista = tipoSituacao;
      });
  }

  buscarCategorias() {
    this.produtoService.buscarTodasCategorias()
      .subscribe((categorias: Categoria[]) => {
        this.categorias = categorias;
        console.log(categorias);
      });
  }

  salvar() {
    if (this.formProduto.invalid) {
      alert('formulario invalido');
      return;
    }
    this.confirmationService.confirm({
      message: 'Você deseja confirmar o cadastro?',
      accept: () => {
        if (this.edicao) {
          this.produtoService.editarProduto(this.produto).subscribe(produto => {
            alert('Produto salvo!');
            console.log(produto);
          }, (erro: HttpErrorResponse) => {
            alert(erro.error.message);
          });
        }
        this.produto.categoria = this.categoria.id;
        this.produto.tipoSituacao = this.tipoSituacao.id;
      }
    });
  }
}
