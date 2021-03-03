import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import { UsuarioListagemComponent } from './usuario-listagem/usuario-listagem.component';


const routes: Routes = [

  {
    path: '',
    component: UsuarioListagemComponent
  },

  {
    path: 'cadastro',
    component: UsuarioFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
