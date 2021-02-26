import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng';
import { CardModule } from 'primeng/card';
import { SharedModule } from '../../shared/shared.module';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';
import { InformacaoProdutoComponent } from './components/informacao-produto/informacao-produto.component';
import { ProdutoCadastroComponent } from './components/produto-cadastro/produto-cadastro.component';
import { ProdutoListagemComponent } from './components/produto-listagem/produto-listagem.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoService } from './services/produto.service';



@NgModule({
  declarations: [ProdutoListagemComponent, ProdutoCadastroComponent, InformacaoProdutoComponent, EditarProdutoComponent],
  providers: [
    ProdutoService
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    ReactiveFormsModule,
    ProdutoRoutingModule,
    SharedModule,
    HttpClientModule,
    CardModule,
    InputNumberModule
  ]
})
export class ProdutoModule { }
