import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PageNotificationService } from '@nuvem/primeng-components';
import { MessageService } from 'primeng';
import { Usuario } from 'src/app/dominio/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario-formulario',
  templateUrl: './usuario-formulario.component.html',
  styleUrls: ['./usuario-formulario.component.css']
})
export class UsuarioFormularioComponent implements OnInit {

  cadastroUsuario: FormGroup;

  @Input() usuario = new Usuario();

  edicao = false;

  usuarioLogado = JSON.parse(localStorage.getItem('usuario'));

  @Output() usuarioSalvo = new EventEmitter<Usuario>();

  @Output() emitEdicao: EventEmitter<Usuario> = new EventEmitter();

  @Output() emitCadastro: EventEmitter<Usuario> = new EventEmitter();


  constructor(
    private pageNotificationService: PageNotificationService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.usuarioLogado) {
      this.usuario = this.usuarioLogado;
      this.edicao = true;
    }

    this.route.params.subscribe(params => {
      if (params.id) {
        this.edicao = true;
        this.buscarUsuarioPorId(params.id);
      }
    });
    this.cadastroUsuario = this.fb.group({
      nome: ['', Validators.minLength(3)],
      cpf: ['', [Validators.minLength(11)]],
      rg: ['', [Validators.minLength(10)]],
      email: ['', Validators.email],
      telefone: '',
      dataNascimento: '',
    });
  }

  buscarUsuarioPorId(id: number) {
    this.usuarioService.buscarUsuarioPorId(id)
      .subscribe(usuario => {
        this.usuario = usuario;
        console.log(this.usuario);
      });
  }

  salvar() {
    if (this.cadastroUsuario.invalid) {
      alert('formulario invalido')
      return;
    }

    if (this.edicao) {
      this.usuarioService.editarUsuario(this.usuario)
        .subscribe(usuario => {
          console.log("usuario salvo", usuario);
          alert('Usuario salvo')
        }, (erro: HttpErrorResponse) => {
          alert(erro.error.message);
        })
      this.emitEdicao.emit(this.usuario);
    } else {
      this.usuarioService.salvarUsuario(this.usuario)
        .subscribe(usuario => {
          console.log("usuario salvo", usuario);
          alert('Usuario salvo')
        }, (erro: HttpErrorResponse) => {
          alert(erro.error.message);
        });
      this.emitCadastro.emit(this.usuario);
    }
  }

  fecharDialog(usuarioSalvo: Usuario) {
    this.usuarioSalvo.emit(usuarioSalvo);
  }


}