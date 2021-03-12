import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecurityModule, VersionTagModule } from '@nuvem/angular-base';
import { BreadcrumbModule, ErrorStackModule, MenuModule, PageNotificationModule } from '@nuvem/primeng-components';
import { BlockUIModule } from 'ng-block-ui';
import { ButtonModule, CalendarModule, ChartModule, ConfirmDialogModule, ContextMenuModule, DialogModule, DropdownModule, FileUploadModule, InputNumberModule, InputTextareaModule, InputTextModule, MultiSelectModule, ProgressBarModule, RadioButtonModule, RatingModule, SliderModule, TableModule, TabViewModule, ToastModule, ToolbarModule } from 'primeng';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiarioErrosComponent } from './components/diario-erros/diario-erros.component';
import { AppFooterComponent } from './components/footer/app.footer.component';
import { HomeComponent } from './components/home/home.component';
import { AppTopbarComponent } from './components/topbar/app.topbar.component';
import { EventService } from './modules/lembrete/services/event.service';
import { ProdutoService } from './modules/produto/services/produto.service';
import { UsuarioService } from './modules/usuario/services/usuario.service';
import { UsuarioListagemComponent } from './modules/usuario/usuario-listagem/usuario-listagem.component';
import { AppConfigService } from './services/appconfigservice';
import { LoginComponent } from './shared/components/login/login.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
    
    declarations: [
        AppComponent,
        AppTopbarComponent,
        AppFooterComponent,
        DiarioErrosComponent,
        HomeComponent,
        UsuarioListagemComponent
    ],

    imports: [
        BlockUIModule.forRoot({
            message: "Carregando..."
        }),
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        PageNotificationModule,
        BreadcrumbModule,
        ErrorStackModule,
        VersionTagModule,
        SecurityModule.forRoot(environment.auth),
        MenuModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        TableModule,
        CalendarModule,
        SliderModule,
        DialogModule,
        MultiSelectModule,
        ContextMenuModule,
        DropdownModule,
        ButtonModule,
        ToastModule,
        InputTextModule,
        ProgressBarModule,
        HttpClientModule,
        FileUploadModule,
        ToolbarModule,
        RatingModule,
        RadioButtonModule,
        InputNumberModule,
        ConfirmDialogModule,
        InputTextareaModule,
        CommonModule,
        ChartModule,
        ToastModule,
        TabViewModule
    ],

    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },

        ProdutoService,
        UsuarioService,
        LoginComponent,
        EventService,
        AppConfigService
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }