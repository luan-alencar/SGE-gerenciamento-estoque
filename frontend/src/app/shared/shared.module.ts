import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ConfirmationService } from 'primeng';
import { CardComponent } from './components/card/card.component';
import { FormularioCadastroComponent } from './components/formulario-cadastro/formulario-cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { PRIMENG_IMPORTS } from './primeng-imports';
import { AppConfigService } from '../services/appconfigservice';

@NgModule({
    imports: [
        PRIMENG_IMPORTS,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [ConfirmationService],
    exports: [
        PRIMENG_IMPORTS,
        CardComponent,
        LoginComponent,
        FormularioCadastroComponent
    ],
    declarations: [CardComponent, LoginComponent, FormularioCadastroComponent]
})
export class SharedModule { }
