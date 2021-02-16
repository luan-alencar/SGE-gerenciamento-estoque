import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { Produto } from 'src/app/dominio/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css'],
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
  providers: [MessageService, ConfirmationService]
})
export class ProdutoCadastroComponent implements OnInit {

  productDialog: boolean;

  products: Produto[] = [];

  product: Produto;

  selectedProducts: Produto[] = [];

  submitted: boolean;

  statuses: any[];
  constructor(private produtoService: ProdutoService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.produtoService.buscarTodosProdutos().subscribe(data => this.products = data);
  }

  openNew() {
    this.product = new Produto();;
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.selectedProducts = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }

  editProduct(product: Produto) {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: Produto) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.nome + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => val.id !== product.id);
        this.product = new Produto();
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    // if (this.product.nome.trim()) {
    //     if (this.product.id) {
    //         this.products[this.findIndexById(this.product.id)] = this.product;                
    //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
    //     }
    //     else {
    //         this.product.id = this.createId();
    //         this.product.image = 'product-placeholder.svg';
    //         this.products.push(this.product);
    //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
    //     }

    //     this.products = [...this.products];
    //     this.productDialog = false;
    //     this.product = {};
    // }
  }

  // findIndexById(id: string): number {
  //     let index = -1;
  //     for (let i = 0; i < this.products.length; i++) {
  //         if (this.products[i].id === id) {
  //             index = i;
  //             break;
  //         }
  //     }

  //     return index;
  // }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
