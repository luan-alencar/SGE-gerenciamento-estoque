import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';
import { ProdutoRoutingModule } from './produto-routing.module';



@NgModule({
  declarations: [ProdutoListagemComponent, ProdutoCadastroComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
