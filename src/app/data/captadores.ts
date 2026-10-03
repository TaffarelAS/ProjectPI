import { Captador, PosiCaptador } from "./modelos/guitarra.modelos";

const ALL: Omit<Captador, 'posicao'>[] = [ 
    { id: 'single-1', nome: 'Single Pickup 1', tipo: 'single', cor: 'preto', mount: 'ring', preco: 100 },
    { id: 'single-2', nome: 'Single Pickup 2', tipo: 'single', cor: 'branco', mount: 'escudo', preco: 100 },

    { id: 'humbucker-1', nome: 'Humbucker 1', tipo: 'humbucker', cor: 'preto', mount: 'corpo', preco: 200 },
    { id: 'humbucker-2', nome: 'Humbucker 2', tipo: 'humbucker', cor: 'branco', mount: 'corpo', preco: 200 },

    { id: 'p90-1', nome: 'P90 1', tipo: 'p90', cor: 'preto', mount: 'ring', preco: 150 },
    { id: 'p90-2', nome: 'P90 2', tipo: 'p90', cor: 'branco', mount: 'escudo', preco: 150 },

    { id: 'active-1', nome: 'Active Pickup 1', tipo: 'active', cor: 'preto', mount: 'corpo', preco: 300 },
    { id: 'active-2', nome: 'Active Pickup 2', tipo: 'active', cor: 'branco', mount: 'corpo', preco: 300 },
];

export const CATALOGO_CAPTADORES: Record<PosiCaptador, Captador[]> = {
    ponte: ALL.map(c => ({ ...c, posicao: 'ponte' as const})),
    meio: ALL.map(c => ({ ...c, posicao: 'meio' as const})),
    braco: ALL.map(c => ({ ...c, posicao: 'braco' as const})),
};