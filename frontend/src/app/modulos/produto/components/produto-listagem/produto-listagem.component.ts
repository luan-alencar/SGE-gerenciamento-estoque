import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Produto } from 'src/app/dominio/produto';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.css']
})
export class ProdutoListagemComponent implements OnInit {

  items: MenuItem[] = [];
  produtos: Produto[] = [];
  produto = new Produto();
  formularioEdicao: boolean;
  exibirDialog = false;

  @Input() categoria: string;
  @Output() display = false;

  constructor(
    private produtoService: ProdutoService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

    this.buscarProdutos();

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

  showDialog(id: number) {
    this.produtoService.buscarProdutoPorId(id)
      .subscribe(produto => {
        this.produto = produto;
        this.display = true;
      });
  }

  mostrarDialog(edicao = false) {
    this.exibirDialog = true;
    this.formularioEdicao = edicao;
  }

  confirmarDeletarProduto(id: number) {
    this.confirmationService.confirm({
      message: 'Deseja confirmar excluir o produto?',
      accept: () => {
        this.deletarProduto(id);
        this.addSingle();
      }
    })
  }


  private buscarProdutos() {
    this.produtoService.buscarTodosProdutos().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
    });
  }

  deletarProduto(id: number) {
    this.produtoService.deletarProduto(id)
      .subscribe(() => {
        setTimeout(() => {
          this.router.navigate(['/produtos'])
        }, 1800);
        this.buscarProdutos();
      }, err => {
        alert('Dados inválidos!');
      });
  }

  fecharDialog(usuarioProduto: Produto) {
    console.log(usuarioProduto);
    this.exibirDialog = false;
    this.buscarProdutos();
  }

}