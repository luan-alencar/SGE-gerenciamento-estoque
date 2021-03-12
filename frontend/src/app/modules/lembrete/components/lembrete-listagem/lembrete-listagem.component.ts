import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-lembrete-listagem',
  templateUrl: './lembrete-listagem.component.html',
  styleUrls: ['./lembrete-listagem.component.css']
})
export class LembreteListagemComponent implements OnInit {

  events: any[];

  options: any;
  
  header: any;


  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().then(events => { this.events = events; });

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: '2017-02-01',
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: true
    };
  }


}
