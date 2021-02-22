import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng';
import { ProdutoListagemComponent } from './../../modulos/produto/components/produto-listagem/produto-listagem.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;

  display = false;

  constructor(private dialogService: DialogService) {
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

  showDialog() {
    this.display = true;
  }

  show() {
    const ref = this.dialogService.open(ProdutoListagemComponent, {
        header: 'Choose a Car',
        width: '70%'
    });
}

}
