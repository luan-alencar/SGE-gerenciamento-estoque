import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MenuItem, ConfirmationService } from 'primeng/api';
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

  cols: any[] = [];
  _selectedColumns: any[];


  constructor(
    private produtoService: ProdutoService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {

    this.buscarProdutos();

    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'categoria', header: 'Categoria' },
      { field: 'quantidade', header: 'Quantidade' }
    ];

    this._selectedColumns = this.cols;
  }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter(col => val.includes(col));
  }

  private buscarProdutos() {
    this.produtoService.buscarTodosProdutos().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
    });

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

  fecharDialog(usuarioProduto: Produto) {
    console.log(usuarioProduto);
    this.exibirDialog = false;
    this.buscarProdutos();
  }

  confirmarDeletarProduto(id: number) {
    this.confirmationService.confirm({
      message: 'Deseja confirmar excluir o produto?',
      accept: () => {
        this.deletarProduto(id);
      }
    })
  }



  deletarProduto(id: number) {
    this.produtoService.deletarProduto(id)
      .subscribe(() => {
        alert('Produto deletado!');
        this.buscarProdutos();
      },
        err => alert(err));
  }
}