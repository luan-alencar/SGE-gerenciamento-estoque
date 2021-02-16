import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { SharedModule } from '../../shared/shared.module';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoService } from './services/produto.service';



@NgModule({
  declarations: [ProdutoListagemComponent, ProdutoCadastroComponent],
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
    CardModule
  ]
})
export class ProdutoModule { }
