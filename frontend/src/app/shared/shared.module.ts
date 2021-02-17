import { NgModule } from '@angular/core';
import { PRIMENG_IMPORTS } from './primeng-imports';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioCadastroComponent } from './components/formulario-cadastro/formulario-cadastro.component';
import { ConfirmationService } from 'primeng';

@NgModule({
    imports: [
        PRIMENG_IMPORTS,
    ],
    providers: [ConfirmationService],
    exports: [
        PRIMENG_IMPORTS,
    ],
    declarations: [CardComponent, LoginComponent, FormularioCadastroComponent]
})
export class SharedModule { }
