import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';


const routes: Routes = [
  {
    path: '',
    component: ProdutoListagemComponent
  },

  {
    path: 'produto-cadastro',
    component: ProdutoCadastroComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
