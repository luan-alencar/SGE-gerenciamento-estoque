import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  exibirDialog = false;
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
    private produtoServico: ProdutoService,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
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

  private buscarProdutos() {
    this.produtoServico.buscarTodosProdutos();
  }


  addSingle() {
    this.messageService.add({ severity: 'success', summary: 'Cadastro de Produto', detail: 'Cadastro realizado' });
  }

  addMultiple() {
    this.messageService.addAll([{ severity: 'success', summary: 'Cadastro de Produto', detail: 'Cadastro realizado' },
    { severity: 'info', summary: 'Editado!', detail: 'O produto foi editado com sucesso' }]);
  }

  clear() {
    this.messageService.clear();
  }


  fecharDialog() {
    this.exibirDialog = false;
    this.buscarTodosProduto();
  }

  showDialog() {
    this.display = true;
  }

  buscarTodosProduto() {
    this.produtoServico.buscarTodosProdutos()
      .subscribe((produto => {
        this.produtos = produto;
      }));
  }

  buscarProduto(id: number) {
    this.produtoServico.buscarProdutoPorId(id)
      .subscribe(produto => this.produto = produto);
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
      message: 'Deseja confirmar a edição do produto?',
      accept: () => {
        this.editar();
      }
    });
  }

  editar() {
    this.produtoServico.editarProduto(this.produto)
      .subscribe(() => {
        this.addSingle();
        setTimeout(() => {
          this.router.navigate(['/produtos']);
        }, 1800)
      }, erro => {
        alert("Dados inválidos");

      });
  }
}