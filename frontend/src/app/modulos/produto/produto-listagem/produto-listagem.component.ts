import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Produto } from 'src/app/dominio/produto';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.css']
})
export class ProdutoListagemComponent implements OnInit {

  items: MenuItem[] = [];
  produtos: Produto[] = [];
  produto: Produto;

  cols: any[];
  _selectedColumns: any[];


  constructor() { }

  ngOnInit(): void {


    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
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
}

