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
  categorias: Categoria[] = [];

  tipoSituacao: TipoSituacao;
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

    this.route.params.subscribe(params => {
      if (params.id) {
        this.edicao = true;
        this.buscarProdutos();
      }
    });

    this.formProduto = this.fb.group({

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
        this.produto.tipoSituacao = this.tipoSituacao.id;
      }
    });
  }
}
