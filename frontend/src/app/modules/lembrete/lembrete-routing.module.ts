import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LembreteListagemComponent } from './components/lembrete-listagem/lembrete-listagem.component';


const routes: Routes = [
  {
    path: '',
    component: LembreteListagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LembreteRoutingModule { }
