import { Injectable, signal, computed } from '@angular/core';
import { GuitarraMontada, Captador, PosiCaptador } from '../data/modelos/guitarra.modelos';

const DEFAULT_GUITARRA: GuitarraMontada = {
    corpo: {
        formato: 'Stratocaster',
        madeira: 'alder',
        acabamento: { id: 'preto', nome: 'Preto', hex: '#000000', type: 'poliuretano' },
    },
    braco: {
        madeira: 'maple',
        escalaMadeira: 'rosewood',
        escalaRaio: 9.5,
        frets: 22,
        scallop: false
    },
    cabecote: {
        tipo: 'strato',
        acabamento: { id: 'preto', nome: 'Preto', hex: '#000000', type: 'poliuretano' },
        tarraxas: 'standard'
    },
    ponte: {
        tipo: 'tremolo', material: 'aço', cor: '#c0c0c0',
    },
    captadores: [],
    hardware: { cor: '#ffffff' }

    
};
@Injectable({ providedIn: 'root' })
export class MontarStore {
    private _montar = signal<GuitarraMontada>(DEFAULT_GUITARRA);
    readonly montar = this._montar.asReadonly();

    readonly totalPrice = computed(() => {
        const b = this._montar();
        const base = 1200; // preço base do corpo + braço
        return b.captadores.reduce((sum, p) => sum + p.preco, base);
    });

    setBody(patch: Partial<GuitarraMontada['corpo']>) {
        this._montar.update(b => ({ ...b, corpo: { ...b.corpo, ...patch } }));
    }

    setNeck(patch: Partial<GuitarraMontada['braco']>) {
        this._montar.update(b => ({ ...b, braco: { ...b.braco, ...patch } }));
    }

    setHeadstock(patch: Partial<GuitarraMontada['cabecote']>) {
        this._montar.update(b => ({ ...b, cabecote: { ...b.cabecote, ...patch } }));
    }

    setBridge(patch: Partial<GuitarraMontada['ponte']>) {
        this._montar.update(b => ({ ...b, ponte: { ...b.ponte, ...patch } }));
    }

    setHardwareColor(cor: string) {
        this._montar.update(b => ({ ...b, hardware: { ...b.hardware, cor } }));
    }

    setPickup(posicao: PosiCaptador, captador: Captador) {
        this._montar.update(b => ({
            ...b,
            captadores: [...b.captadores.filter(p => p.posicao !== posicao), { ...captador, posicao }],
        }));
    }

    reset() { this._montar.set(DEFAULT_GUITARRA); }
}
