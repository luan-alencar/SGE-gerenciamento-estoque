import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LembreteRoutingModule } from './lembrete-routing.module';
import { EventService } from './services/event.service';
import { LembreteListagemComponent } from './components/lembrete-listagem/lembrete-listagem.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule, CalendarModule, CardModule, CheckboxModule, DialogModule, FullCalendarModule, InputTextModule, TabViewModule } from 'primeng';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LembreteListagemComponent],
  providers: [EventService],
  imports: [
    CommonModule,
    LembreteRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    FullCalendarModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    ButtonModule,
    TabViewModule,
    CardModule
  ]
})
export class LembreteModule { }
