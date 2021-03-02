import { InputMaskModule } from 'primeng/inputmask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule, InputMask, InputNumberModule, SharedModule } from 'primeng';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [UsuarioFormularioComponent],
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
