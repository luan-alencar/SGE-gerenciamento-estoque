import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/dominio/produto';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-informacao-produto',
  templateUrl: './informacao-produto.component.html',
  styleUrls: ['./informacao-produto.component.css']
})
export class InformacaoProdutoComponent implements OnInit {

  @Input() produto = new Produto();
  @Input() categoria: string;
  exibirDialog = false;
  formularioEdicao: boolean;


  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  mostrarDialogEditar(id: number) {
    this.produtoService.buscarProdutoPorId(id)
      .subscribe(produto => {
        this.produto = produto;
        this.mostrarDialog(true);
      });
  }

  mostrarDialog(edicao = false) {
    this.exibirDialog = true;
    this.formularioEdicao = edicao;
  }

}
