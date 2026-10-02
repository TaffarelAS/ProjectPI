export interface FormatoDef {
    id : string;
    nome : string;
    path : string;
}

export const FORMATOS: Record<string, FormatoDef> = {
    strato: {
        id: 'strato',
        nome: 'Stratocaster',
        path: 'M200,200 C120,200 100,260 100,330 C100,420 140,520 200,560 C260,520 300,420 300,330 C300,260 280,200 200,200 Z',
    },
    tele: {
        id: 'tele',
        nome: 'Telecaster', 
        path: 'M200,200 C120,200 95,270 95,340 C95,430 140,540 200,570 C260,540 305,430 305,340 C305,270 280,200 200,200 Z',
    },
    lespaul: {
        id: 'lespaul',
        nome: 'Les Paul',
        path: 'M200,180 C130,180 100,240 100,310 C100,420 130,540 200,570 C270,540 300,420 300,310 C300,240 270,180 200,180 Z',
    },
    sg: {
        id: 'sg',
        nome: 'SG',
        path: 'M200,180 C130,180 100,240 100,310 C100,420 130,540 200,570 C270,540 300,420 300,310 C300,240 270,180 200,180 Z',
    },

}

export const CABEÇOTES: Record<string, string> = {
    strat: 'M175,20 L225,20 L235,70 L165,70 Z',
    tele: 'M180,15 L220,15 L230,75 L170,75 Z',
    gibson: 'M170,15 L230,15 L235,80 L165,80 Z',
};

export const ESCUDOS : Record<string, string> = { 
    strat: 'M150,320 C130,340 130,420 150,470 L250,470 C270,420 270,340 250,320 Z',
    tele: 'M150,340 L250,340 L250,470 L150,470 Z',
    lespaul: 'M155,340 L245,340 L245,430 L155,430 Z',
};