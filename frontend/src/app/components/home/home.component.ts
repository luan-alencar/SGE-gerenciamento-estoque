import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  value1: number = 0;

  value2: number = 50;

  value3: number = 75;

  value4: number = 10;

  value5: number = 40;

  value6: number = 60;

  value7: number = 40;

  value8: number = 60;

  value9: number = 50;

  data: any;

  value = 0;


  constructor() {
    this.data = {
      labels: ['Em estoque', 'Baixo estoque', 'Fora de estoque'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
  }

  ngOnInit(): void {
  }


}
