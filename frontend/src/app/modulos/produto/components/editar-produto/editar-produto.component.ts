import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng';
import { Categoria } from 'src/app/dominio/categoria';
import { TipoSituacao } from 'src/app/dominio/tipo-situacao';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from './../../../../dominio/produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  formProduto: FormGroup

  produto = new Produto();
  formularioEdicao: boolean;
  exibirDialog = false;
  produtos: Produto[] = [];
  @Input() edicao = false;
  @Output() produtoSalvo = new EventEmitter<Produto>();
  @Output() display = false;

  tipoSituacaoLista: TipoSituacao[] = [];
  tipoSituacao: TipoSituacao;

  categoria: Categoria;
  categorias: Categoria[] = [];

  constructor(
    private produtoServico: ProdutoService,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buscarProdutos();

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

  fecharDialog() {
    this.exibirDialog = false;
    this.buscarTodosProduto();
  }

  buscarTodosProduto() {
    this.produtoServico.buscarTodosProdutos()
      .subscribe((produto => {
        this.produtos = produto;
      }));
  }

  showDialog() {
    this.display = true;
  }

  buscarProduto(id: number) {
    this.produtoServico.buscarProdutoPorId(id)
      .subscribe(produto => this.produto = produto);
  }

  private buscarProdutos() {
    this.produtoServico.buscarTodosProdutos();
  }

  buscarTipoSituacao() {
    this.produtoServico.buscarTodasSituacoes()
      .subscribe((tipoSituacao: TipoSituacao[]) => {
        this.tipoSituacaoLista = tipoSituacao;
      });
  }

  buscarCategorias() {
    this.produtoServico.buscarTodasCategorias()
      .subscribe((categorias: Categoria[]) => {
        this.categorias = categorias;
        console.log(categorias);
      });
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Deseja salvar mesmo esse produto?',
      accept: () => {

      }
    });
  }
}