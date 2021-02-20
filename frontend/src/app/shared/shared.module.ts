import { NgModule } from '@angular/core';
import { ConfirmationService } from 'primeng';
import { CardComponent } from './components/card/card.component';
import { FormularioCadastroComponent } from './components/formulario-cadastro/formulario-cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { PRIMENG_IMPORTS } from './primeng-imports';

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
