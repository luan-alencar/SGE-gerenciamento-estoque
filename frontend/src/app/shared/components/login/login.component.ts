import { Chave } from './../../../dominio/chave';
import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng';
import { Usuario } from 'src/app/dominio/usuario';
import { UsuarioService } from 'src/app/modules/usuario/services/usuario.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

    items: MenuItem[] = [];

    activeIndex: number = 1;

    display: boolean = false;

    formLoginUsuario: FormGroup;

    chaveInput: string;

    chave = new Chave();

    @Output() emitUsuario = new EventEmitter<Usuario>();

    constructor(private messageService: MessageService,
        private fb: FormBuilder,
        public usuarioService: UsuarioService,
        private router: Router) { }

    ngOnInit(): void {

        this.pegarUsuarioLocalStorage();
        this.formLoginUsuario = this.fb.group({
            chave: ['', Validators.required]
        });

        this.items = [{
            label: 'Personal',
            command: (event: any) => {
                this.activeIndex = 0;
                this.messageService.add({ severity: 'info', summary: 'First Step', detail: event.item.label });
            }
        },
        {
            label: 'Seat',
            command: (event: any) => {
                this.activeIndex = 1;
                this.messageService.add({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
            }
        },
        {
            label: 'Payment',
            command: (event: any) => {
                this.activeIndex = 2;
                this.messageService.add({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
            }
        },
        {
            label: 'Confirmation',
            command: (event: any) => {
                this.activeIndex = 3;
                this.messageService.add({ severity: 'info', summary: 'Last Step', detail: event.item.label });
            }
        }
        ];
    }

    pegarUsuarioLocalStorage() {
        const usuario = JSON.parse(window.localStorage.getItem("usuario"));
        this.emitUsuario.emit(usuario);
    }

    login(chaveInput: string) {
        this.router.navigate([''])
        this.chave.chave = chaveInput;
        this.usuarioService.buscarUsuarioPorChave(this.chave)
            .subscribe((usuario: Usuario) => {
                this.emitUsuario.emit(usuario);
                localStorage.setItem("usuario", JSON.stringify(usuario));
            });
    }

    mostrarDialog() {
        this.display = true;
    }

    fecharDialog() {
        this.display = false;
    }

    logout() {
        localStorage.clear();
        location.reload();
    }

}
