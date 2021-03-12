import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng';
import { Subscription } from 'rxjs';
import { AppConfig } from 'src/app/dominio/appconfig';
import { Categoria } from 'src/app/dominio/categoria';
import { Produto } from 'src/app/dominio/produto';
import { TipoSituacao } from 'src/app/dominio/tipo-situacao';
import { AppConfigService } from 'src/app/services/appconfigservice';
import { ProdutoService } from '../../modules/produto/services/produto.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
  styleUrls: ['./home.component.scss'],
  providers: [MessageService, ConfirmationService]

})
export class HomeComponent implements OnInit {

  @Input() produto = new Produto();

  @Input() edicao = false;

  @Output() produtoSalvo = new EventEmitter<Produto>();

  @Output() display = false;

  data: any;

  chartOptions: any;

  subscription: Subscription;

  config: AppConfig;

  produtoDialog: boolean;

  selecionarProdutos: Produto[] = [];

  submitted: boolean;

  statuses: any[];

  formProduto: FormGroup;

  tipoSituacaoLista: TipoSituacao[] = [];

  tipoSituacao: TipoSituacao;

  categoria: Categoria;

  categorias: Categoria[] = [];

  produtos: Produto[] = [];

  constructor(

    private produtoService: ProdutoService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private router: Router,
    private messageService: MessageService,
    private configService: AppConfigService) { }

  ngOnInit(): void {

    this.buscarProdutos();
    this.buscarCategorias();
    this.buscarTipoSituacao();

    this.produtoService.buscarTodosProdutos();

    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];

    this.formProduto = this.fb.group({
      nome: '',
      preco: '',
      descricao: '',
      quantidade: '',
      dataAquisicao: '',
      tipoSituacao: '',
      categoria: ''
    });

    this.route.params.subscribe(params => {
      if (params.id) {
        this.edicao = true;
        this.buscarProduto(params.id);
      }
    });

    this.data = {
      labels: ['A', 'B', 'C'],
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
        }
      ]
    };

    this.config = this.configService.config;
    this.updateChartOptions();
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
      this.updateChartOptions();
    });

  }

  private buscarProdutos() {
    this.produtoService.buscarTodosProdutos();
  }

  updateChartOptions() {
    this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
  }

  getLightTheme() {
    return {
      legend: {
        labels: {
          fontColor: '#495057'
        }
      }
    }
  }

  getDarkTheme() {
    return {
      legend: {
        labels: {
          fontColor: '#ebedef'
        }
      }
    }
  }

  addSingle() {
    this.messageService.add({ severity: 'success', summary: 'Cadastro de Produto', detail: 'Cadastro realizado' });
  }

  addMultiple() {
    this.messageService.addAll([{ severity: 'success', summary: 'Cadastro de Produto', detail: 'Cadastro realizado' },
    { severity: 'info', summary: 'Editado!', detail: 'O produto foi editado com sucesso' }]);
  }

  clear() {
    this.messageService.clear();
  }

  openNew() {
    this.produto = new Produto();
    this.submitted = false;
    this.produtoDialog = true;
  }

  showDialog() {
    this.display = true;
  }

  buscarProduto(id: number) {
    this.produtoService.buscarProdutoPorId(id)
      .subscribe(produto => this.produto = produto);
  }

  buscarTipoSituacao() {
    this.produtoService.buscarTodasSituacoes()
      .subscribe((tipoSituacao: TipoSituacao[]) => {
        this.tipoSituacaoLista = tipoSituacao;
      });
  }

  buscarCategorias() {
    this.produtoService.buscarTodasCategorias()
      .subscribe((categorias: Categoria[]) => {
        this.categorias = categorias;
        console.log(categorias);
      });
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Deseja salvar mesmo esse produto?',
      accept: () => {
        this.salvar()
      }
    });
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.produtos = this.produtos.filter(val => !this.selecionarProdutos.includes(val));
        this.selecionarProdutos = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }

  editProduct(product: Produto) {
    this.produto = { ...product };
    this.produtoDialog = true;
  }

  deleteProduct(product: Produto) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.nome + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.produtos = this.produtos.filter(val => val.id !== product.id);
        this.produto = new Produto();
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.produtoDialog = false;
    this.submitted = false;
  }

  salvar() {

    this.produto.categoria = this.categoria.id;
    this.produto.tipoSituacao = this.tipoSituacao.id;

    if (this.formProduto.invalid) {
      alert('formulario invalido');
      return;
    }

    this.produtoService.salvarProduto(this.produto)
      .subscribe(produto => {
        this.addSingle();
        this.fecharDialog(produto);
        setTimeout(() => {
          this.router.navigate(['/produtos']);
        }, 1800);
      }, erro => {
        alert('Dados inválidos!')
      });
    console.log(this.produto);
  }

  fecharDialog(produtoSalvo: Produto) {
    this.produtoSalvo.emit(produtoSalvo);
  }

}
