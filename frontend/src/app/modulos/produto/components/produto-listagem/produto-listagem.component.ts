import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
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
  produto: Produto;

  @Output() display = false;

  cols: any[] = [];
  _selectedColumns: any[];


  constructor(private produtoService: ProdutoService) { }

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

  buscarProdutos() {
    this.produtoService.buscarTodosProdutos().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
    });

  }
}

