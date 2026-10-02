import { Injectable, signal, computed } from '@angular/core';
import { GuitarraMontada, Captador, PosiCaptador } from '../pages/modelos/guitarra.modelos';

const DEFAULT_GUITARRA: GuitarraMontada = {
    corpo: {
        formato: 'Stratocaster',
        madeira: 'alder',
        acabamento: { id: 'preto', nome: 'Preto', hex: '#000000', type: 'poliuretano' },
    },
    braço: {
        madeira: 'maple',
        escalaMadeira: 'rosewood',
        escalaRaio: 9.5,
        frets: 22,
        scallop: false
    },
    cabeçote: {
        tipo: 'strato',
        acabamento: { id: 'preto', nome: 'Preto', hex: '#000000', type: 'poliuretano' },
        tarraxas: 'standard'
    },
    ponte: {
        tipo: 'tremolo', material: 'aço', cor: '#c0c0c0'
    },
    captadores: [],
    hardware: { cor: '#ffffff' }

    
};
@Injectable({ providedIn: 'root' })
export class BuildStore {
    private _build = signal<GuitarraMontada>(DEFAULT_GUITARRA);
    readonly build = this._build.asReadonly();

    readonly totalPrice = computed(() => {
        const b = this._build();
        const base = 1200; // preço base do corpo + braço
        return b.captadores.reduce((sum, p) => sum + p.preco, base);
    });

    setBody(patch: Partial<GuitarraMontada['corpo']>) {
        this._build.update(b => ({ ...b, corpo: { ...b.corpo, ...patch } }));
    }

    setNeck(patch: Partial<GuitarraMontada['braço']>) {
        this._build.update(b => ({ ...b, braço: { ...b.braço, ...patch } }));
    }

    setHeadstock(patch: Partial<GuitarraMontada['cabeçote']>) {
        this._build.update(b => ({ ...b, cabeçote: { ...b.cabeçote, ...patch } }));
    }

    setBridge(patch: Partial<GuitarraMontada['ponte']>) {
        this._build.update(b => ({ ...b, ponte: { ...b.ponte, ...patch } }));
    }

    setHardwareColor(cor: string) {
        this._build.update(b => ({ ...b, hardware: { ...b.hardware, cor } }));
    }

    setPickup(posicao: PosiCaptador, captador: Captador) {
        this._build.update(b => ({
            ...b,
            captadores: [...b.captadores.filter(p => p.posicao !== posicao), { ...captador, posicao }],
        }));
    }

    reset() { this._build.set(DEFAULT_GUITARRA); }
}
