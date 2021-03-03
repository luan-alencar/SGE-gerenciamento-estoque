import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LembretesRoutingModule } from './lembretes-routing.module';
import { LembreteListagemComponent } from './components/lembrete-listagem/lembrete-listagem.component';


@NgModule({
  declarations: [LembreteListagemComponent],
  imports: [
    CommonModule,
    LembretesRoutingModule
  ]
})
export class LembretesModule { }
