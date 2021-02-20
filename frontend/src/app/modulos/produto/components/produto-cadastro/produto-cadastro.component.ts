import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng';
import { MessageService } from 'primeng/api';
import { Categoria } from 'src/app/dominio/categoria';
import { Produto } from 'src/app/dominio/produto';
import { TipoSituacao } from 'src/app/dominio/tipo-situacao';
import { ProdutoService } from '../../services/produto.service';


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
  produtos: Produto[] = [];
  @Input() edicao = false;
  @Output() produtoSalvo = new EventEmitter<Produto>();
  @Output() display = false;

  constructor(

    private produtoService: ProdutoService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private router: Router) { }

  ngOnInit(): void {

    this.buscarProdutos();
    this.buscarCategorias();
    this.buscarTipoSituacao();

    this.formProduto = this.fb.group({
      nome: '',
      preco: '',
      descricao: '',
      quantidade: '',
      tipoSituacao: '',
      categoria: ''
    });

    this.route.params.subscribe(params => {
      if (params.id) {
        this.edicao = true;
        this.buscarProduto(params.id);
      }
    });
  }

  showDialog() {
    this.display = true;
  }

  buscarProduto(id: number) {
    this.produtoService.buscarProdutoPorId(id)
      .subscribe(produto => this.produto = produto);
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

  confirm() {
    this.confirmationService.confirm({
      message: 'Deseja salvar mesmo esse produto?',
      accept: () => {
        this.salvar()
      }
    });
  }

  salvar() {

    this.produto.categoria = this.categoria.id;
    this.produto.tipoSituacao = this.tipoSituacao.id;

    if (this.formProduto.invalid) {
      alert('formulario invalido');
      return;
    }

    if (this.edicao) {
      this.produtoService.editarProduto(this.produto).subscribe(
        produto => {
          this.produto = produto;
          alert("Produto salvo com sucesso");
          setTimeout(() => {
            this.router.navigate(['/produtos'])
          }, 1500)
        }, erro => {
          alert("dados inválidos")

        });
    } else {

      this.produtoService.salvarProduto(this.produto)
        .subscribe(produto => {
          alert('Produto salvo!');
          this.fecharDialog(produto);
        }, (erro: HttpErrorResponse) => {
          alert(erro.error.message)
        });
    }
    console.log(this.produto);
  }

  fecharDialog(produtoSalvo: Produto) {
    this.produtoSalvo.emit(produtoSalvo);
  }
}