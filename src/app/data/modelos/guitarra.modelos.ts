export type TipoMadeira = 'mogno' | 'alder' | 'basswood' | 'maple' | 'ash' | 'rosewood';
export type TipoAcabamento = 'nitro' | 'oleo' | 'relic' | 'poliuretano' | 'poliester';

export interface CorAcabamento { 
    id : string;
    nome : string;
    hex : string;
    type : TipoAcabamento;
}

export type TipoCaptador = 'single' | 'humbucker' | 'p90' | 'active';

export type PosiCaptador = 'ponte' | 'meio' | 'braco';

export interface Captador {
    id : string;
    nome : string;
    tipo : TipoCaptador;
    posicao : PosiCaptador;
    cor : string;
    mount : 'ring' | 'escudo' | 'corpo';
    preco : number;
}

export interface GuitarraMontada {
    corpo : {
        formato : string;
        madeira : TipoMadeira;
        acabamento : CorAcabamento;
        escudo?: string;
    };
    braco : {
        madeira : TipoMadeira;
        escalaMadeira: TipoMadeira;
        escalaRaio : number;
        frets : number;
        scallop : boolean;
    };
    cabecote : {
        tipo : string;
        acabamento : CorAcabamento;
        tarraxas : string;
    };
    ponte : {
        tipo : string;
        material : string;
        cor : string;
    };
    captadores : Captador[];
    hardware : {
        cor : string;
    };
}