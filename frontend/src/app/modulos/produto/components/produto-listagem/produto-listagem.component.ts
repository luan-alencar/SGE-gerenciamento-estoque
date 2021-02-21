import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem } from 'primeng/api';
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
    private router: Router
  ) { }

  ngOnInit(): void {

    this.buscarProdutos();

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
        alert('Produto deletado!');
        setTimeout(() => {
          this.router.navigate(['/produtos'])
        }, 1500);
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