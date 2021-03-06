import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../../services/event.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Calendar } from '@fullcalendar/core'; // include this line
import { FullCalendar } from 'primeng/fullcalendar';
import { styles } from 'ng-block-ui/components/block-ui-content/block-ui-content.component.style';

@Component({
  selector: 'app-lembrete-listagem',
  templateUrl: './lembrete-listagem.component.html',
  styleUrls: ['./lembrete-listagem.component.css']
})
export class LembreteListagemComponent implements OnInit {

  events: any[];

  @ViewChild('calendar') private calendar: FullCalendar;

  options: any;

  header: any;

  calendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth'
  };

  constructor(private eventService: EventService) {
    const name = Calendar.name; // add this line in your constructor
  }

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
