import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSuccessComponent } from '@nuvem/angular-base';
import { DiarioErrosComponent } from './components/diario-erros/diario-erros.component';
import { HomeComponent } from './components/home/home.component';
import { LembreteModule } from './modules/lembrete/lembrete.module';
import { ProdutoListagemComponent } from './modules/produto/components/produto-listagem/produto-listagem.component';
import { ProdutoModule } from './modules/produto/produto.module';
import { UsuarioModule } from './modules/usuario/usuario.module';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'lembretes',
    loadChildren: () => LembreteModule
  },

  {
    path: 'usuarios',
    loadChildren: () => UsuarioModule,
  },

  {
    path: 'listagem',
    component: ProdutoListagemComponent
  },

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
