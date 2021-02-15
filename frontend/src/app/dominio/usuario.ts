import { Identifiers } from "@angular/compiler";

export class Usuario {

    id: number;
    nome: string;
    cpf: string;
    rg: string;
    email: string;
    dataNascimento: Date;
    tipoUsuario: boolean;

    constructor() { }
}
