import { Categoria } from "./categoria";
import { TipoSituacao } from "./tipo-situacao";

export class Produto {

    id: number;
    nome: string;
    preco: number;
    descricao: string;
    quantidade: number;
    tipoSituacao: number;
    categoria: number;

    constructor() { }
}