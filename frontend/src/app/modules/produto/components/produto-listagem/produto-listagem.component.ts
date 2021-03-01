import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Categoria } from 'src/app/dominio/categoria';
import { Produto } from 'src/app/dominio/produto';
import { TipoSituacao } from 'src/app/dominio/tipo-situacao';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.scss'],
})
export class ProdutoListagemComponent implements OnInit {

  formProduto: FormGroup;

  items: MenuItem[] = [];

  produtos: Produto[] = [];

  produto = new Produto();

  formularioEdicao: boolean;

  exibirDialog = false;


  produtoSalvo = new EventEmitter<Produto>();

  categoria = new Categoria();

  display = false;

  produtoDialog: boolean;

  statuses: any[];

  selecionarProdutos: Produto[] = [];

  submitted: boolean;

  tipoSituacaoLista: TipoSituacao[] = [];
  
  tipoSituacao: TipoSituacao;

  categorias: Categoria[] = [];

  constructor(
    private produtoService: ProdutoService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

    this.buscarProdutos();

    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];

  }

  private buscarProdutos() {
    this.produtoService.buscarTodosProdutos().subscribe(data => this.produtos = data);
  }

  deleteSingle() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product Deleted' });
  }

  addMultiple() {
    this.messageService.addAll([{ severity: 'success', summary: 'Success', detail: 'Registered Product' },
    { severity: 'info', summary: 'Success', detail: 'Edited Product' }]);
  }

  clear() {
    this.messageService.clear();
  }

  openNew() {
    this.produto = new Produto();
    this.submitted = false;
    this.produtoDialog = true;
  }

  showDialog() {
    this.display = true;
  }

  buscarProduto(id: number) {
    this.produtoService.buscarProdutoPorId(id)
      .subscribe(produto => this.produto = produto);
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


  mostrarDialogEditar(id: number) {
    this.produtoService.buscarProdutoPorId(id)
      .subscribe(produto => {
        this.produto = produto;
        this.mostrarDialog(true);
        console.log(this.produto);
      });
  }

  mostrarDialog(edicao = false) {
    this.exibirDialog = true;
    this.formularioEdicao = edicao;
  }


  fecharDialog(produtoSalvo: Produto) {
    this.exibirDialog = false;
    this.buscarProdutos();
  }

  confirmarDeletarProduto(id: number) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir o usuário?',
      accept: () => {
        this.deletarProduto(id);
      }
    });
  }

  deletarProduto(id?: number) {
    this.produtoService.deletarProduto(id)
      .subscribe(() => {
        this.deleteSingle();
        this.buscarProdutos();
      },
        err => alert(err));
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.produtos = this.produtos.filter(val => !this.selecionarProdutos.includes(val));
        this.selecionarProdutos = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.produtoDialog = false;
    this.submitted = false;
  }

  salvar() {

    this.produto.categoria = this.categoria.id;
    this.produto.tipoSituacao = this.tipoSituacao.id;

    if (this.formProduto.invalid) {
      alert('formulario invalido');
      return;
    }

    this.produtoService.salvarProduto(this.produto)
      .subscribe(produto => {
        this.deleteSingle();
        this.fecharDialog(produto);
        setTimeout(() => {
          this.router.navigate(['/produtos']);
        }, 1800);
      }, erro => {
        alert('Dados inválidos!')
      });
    console.log(this.produto);
  }



}