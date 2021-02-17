import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/dominio/produto';

@Component({
  selector: 'app-informacao-produto',
  templateUrl: './informacao-produto.component.html',
  styleUrls: ['./informacao-produto.component.css']
})
export class InformacaoProdutoComponent implements OnInit {

  produto: Produto;

  constructor() { }

  ngOnInit(): void {
  }

}
