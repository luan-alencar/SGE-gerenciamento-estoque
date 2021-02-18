import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng';
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
  @Output() produtoSalvo = new EventEmitter<Produto>();

  @Input() edicao = false;

  @Output() display = false;

  items: any[];

  constructor(

    private produtoService: ProdutoService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router) { }

  ngOnInit(): void {

    this.buscarProdutos();
    this.buscarCategorias();
    this.buscarTipoSituacao();

    this.route.params.subscribe(params => {
      if (params.id) {
        this.edicao = true;
        this.buscarProduto(params.id);
      }
    });

    this.items = [
      {
        label: 'Update', icon: 'pi pi-refresh', command: () => {
          this.update();
        }
      },
      {
        label: 'Delete', icon: 'pi pi-times', command: () => {
          this.delete();
        }
      },
      { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
      { separator: true },
      { label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup'] }
    ];

    this.formProduto = this.fb.group({
      nome: '',
      preco: '',
      descricao: '',
      quantidade: '',
      tipoSituacao: '',
      categoria: ''
    });
  }

  // Metodos de Mensagem do MessageService - Início
  save(severity: string) {
    this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
  }

  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
  }
  // Metodos de Mensagem do MessageService - Fim


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
      this.produtoService.editarProduto(this.produto).subscribe(produto => {
        alert('Produto editado!');
        console.log(produto);
      }, (erro: HttpErrorResponse) => {
        alert(erro.error.message);
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
