import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LembreteRoutingModule } from './lembrete-routing.module';
import { EventService } from './services/event.service';
import { LembreteListagemComponent } from './components/lembrete-listagem/lembrete-listagem.component';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [LembreteListagemComponent],
  providers: [EventService],
  imports: [
    CommonModule,
    LembreteRoutingModule,
    SharedModule,
    HttpClientModule,
    CardModule
  ]
})
export class LembreteModule { }
