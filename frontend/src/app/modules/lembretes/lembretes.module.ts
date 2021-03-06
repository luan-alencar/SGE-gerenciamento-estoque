import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule, CalendarModule, CardModule, CheckboxModule, DialogModule, InputTextModule, SharedModule, TabViewModule } from 'primeng';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { LembreteCadastroComponent } from './components/lembrete-cadastro/lembrete-cadastro.component';
import { LembreteListagemComponent } from './components/lembrete-listagem/lembrete-listagem.component';
import { LembretesRoutingModule } from './lembretes-routing.module';
import { EventService } from './services/event.service';



@NgModule({
  declarations: [LembreteListagemComponent, LembreteCadastroComponent],
  providers: [EventService],
  imports: [
    CommonModule,
    FormsModule,
    FullCalendarModule,
    DialogModule,
    InputTextModule,
    CheckboxModule,
    SharedModule,
    CalendarModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    TabViewModule,
    LembretesRoutingModule
  ]
})
export class LembretesModule { }
