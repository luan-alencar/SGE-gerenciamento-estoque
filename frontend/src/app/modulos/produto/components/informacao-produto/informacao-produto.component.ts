import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng';
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


  constructor(
    private produtoService: ProdutoService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {


  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Deseja editar mesmo esse produto?',
      accept: () => {
        this.editar()
      }
    });
  }

  editar() {
    this.produtoService.editarProduto(this.produto)
      .subscribe(produto => {
        alert('Produto editado!');
        console.log(produto);
      }, (erro: HttpErrorResponse) => {
        alert(erro.error.message);
      });
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
