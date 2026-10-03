import {TipoMadeira, CorAcabamento} from './modelos/guitarra.modelos';

export const CORES : CorAcabamento[] = [
    {id: 'preto', nome: 'Preto', hex: '#000000', type: 'poliuretano'},
    {id: 'branco', nome: 'Branco', hex: '#FFFFFF', type: 'poliuretano'},
    {id: 'vermelho', nome: 'Vermelho', hex: '#FF0000', type: 'poliuretano'},
    { id: 'surfgreen', nome: 'Surf Green', hex: '#7dbfa8', type: 'nitro' },
    { id: 'natural', nome: 'Natural', hex: '#d9b37a', type: 'oleo' },
];

export const MADEIRAS: {id: TipoMadeira, nome: string}[] = [
    {id: 'mogno', nome: 'Mogno'},
    {id: 'alder', nome: 'Alder'},
    { id: 'ash', nome: 'Ash' },
    { id: 'basswood', nome: 'Basswood' },
    { id: 'maple', nome: 'Maple' }
];

export const COR_HARDWARE = [
    {id: 'cromado', nome: 'Cromado', hex: '#C0C0C0'},
    {id: 'niquel', nome: 'Niquel', hex: '#B0B0B0'},
    {id: 'dourado', nome: 'Dourado', hex: '#FFD700'},
    {id: 'preto', nome: 'Preto', hex: '#000000'},
];