import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';
import { ProdutoCadastroComponent } from './components/produto-cadastro/produto-cadastro.component';
import { ProdutoListagemComponent } from './components/produto-listagem/produto-listagem.component';


const routes: Routes = [
  {
    path: '',
    component: ProdutoListagemComponent
  },

  {
    path: 'editar',
    component: EditarProdutoComponent
  },

  {
    path: 'cadastro',
    component: ProdutoCadastroComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
