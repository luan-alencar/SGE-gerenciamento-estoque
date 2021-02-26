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
  styleUrls: ['./produto-listagem.component.css']
})
export class ProdutoListagemComponent implements OnInit {

  formProduto: FormGroup;

  items: MenuItem[] = [];
  produtos: Produto[] = [];
  produto = new Produto();
  formularioEdicao: boolean;
  exibirDialog = false;

  @Output() produtoSalvo = new EventEmitter<Produto>();

  @Input() categoria = new Categoria();
  @Output() display = false;

  produtoDialog: boolean;

  statuses: any[];

  selecionarProdutos: Produto[] = [];

  submitted: boolean;

  @Output() tipoSituacaoLista: TipoSituacao[] = [];
  @Output() tipoSituacao: TipoSituacao;

  categorias: Categoria[] = [];

  constructor(
    private produtoService: ProdutoService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

    this.buscarProdutos();

  }

  private buscarProdutos() {
    this.produtoService.buscarTodosProdutos();
  }

  addSingle() {
    this.messageService.add({ severity: 'success', summary: 'Delete de Produto', detail: 'Produto apagado com sucesso!' });
  }

  addMultiple() {
    this.messageService.addAll([{ severity: 'success', summary: 'Cadastro de Produto', detail: 'Cadastro realizado' },
    { severity: 'info', summary: 'Editado!', detail: 'O produto foi editado com sucesso' }]);
  }

  clear() {
    this.messageService.clear();
  }


  mostrarDialog(edicao = false) {
    this.exibirDialog = true;
    this.formularioEdicao = edicao;
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

  editProduct(product: Produto) {
    this.produto = { ...product };
    this.produtoDialog = true;
  }

  deleteProduct(product: Produto) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.nome + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.produtos = this.produtos.filter(val => val.id !== product.id);
        this.produto = new Produto();
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
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
        this.addSingle();
        this.fecharDialog(produto);
        setTimeout(() => {
          this.router.navigate(['/produtos']);
        }, 1800);
      }, erro => {
        alert('Dados inválidos!')
      });
    console.log(this.produto);
  }



  fecharDialog(produtoSalvo: Produto) {
    this.produtoSalvo.emit(produtoSalvo);
  }
}