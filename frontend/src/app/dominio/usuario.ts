import { Identifiers } from "@angular/compiler";

export class Usuario {

    id: number;
    nome: string;
    cpf: string;
    rg: string;
    telefone: string;
    email: string;
    dataNascimento: Date;
    admin: boolean;

    constructor() { }
}
