
export class Produto {

    id: number;
    nome: string;
    preco: number;
    descricao: string;
    quantidade: number;
    imagem: string;
    dataAquisicao: Date;
    tipoSituacao: number;
    categoria: number;
    rating?:number;
    inventoryStatus?:string;


    constructor() { }
}