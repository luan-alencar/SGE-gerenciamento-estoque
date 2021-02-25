import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng';
import { Categoria } from 'src/app/dominio/categoria';
import { Produto } from 'src/app/dominio/produto';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-informacao-produto',
  templateUrl: './informacao-produto.component.html',
  styleUrls: ['./informacao-produto.component.css']
})
export class InformacaoProdutoComponent implements OnInit {

  @Input() produto = new Produto();
  @Input() categoria: Categoria;
  exibirDialog = false;
  formularioEdicao: boolean;


  constructor(
    private produtoService: ProdutoService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) { }

  ngOnInit(): void {


  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Deseja editar mesmo esse produto?',
      accept: () => {
      }
    });
  }



  mostrarDialogEditar(id: number) {
    this.produtoService.buscarProdutoPorId(id)
      .subscribe(produto => {
        this.produto = produto;
        console.log(this.produto);
        this.mostrarDialog(true);
      });
  }

  mostrarDialog(edicao = false) {
    this.exibirDialog = true;
    this.formularioEdicao = edicao;
  }

}
