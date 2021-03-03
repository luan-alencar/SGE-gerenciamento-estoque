import { UsuarioListagemComponent } from './usuario-listagem/usuario-listagem.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule, InputNumberModule, SharedModule } from 'primeng';
import { InputMaskModule } from 'primeng/inputmask';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';



@NgModule({
  declarations: [UsuarioFormularioComponent, UsuarioListagemComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    CardModule,
    InputNumberModule,
    InputMaskModule
  ]
})
export class UsuarioModule { }
