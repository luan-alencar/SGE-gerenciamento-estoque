import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { Produto } from 'src/app/dominio/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class ProdutoCadastroComponent implements OnInit {

  constructor(private produtoService: ProdutoService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {

  }

}
