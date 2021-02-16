import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiarioErrosComponent } from './components/diario-erros/diario-erros.component';
import { LoginSuccessComponent } from '@nuvem/angular-base';
import { ProdutoListagemComponent } from './modulos/produto/produto-listagem/produto-listagem.component';
import { ProdutoModule } from './modulos/produto/produto.module';

const routes: Routes = [

  {
    path: 'produtos',
    loadChildren: () => ProdutoModule
  },

  {
    path: 'diario-erros',
    component: DiarioErrosComponent,

    data: {
      breadcrumb: 'Diário de Erros'
    }
  },

  {
    path: 'login-success',
    component: LoginSuccessComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
