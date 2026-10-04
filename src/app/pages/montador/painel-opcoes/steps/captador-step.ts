import { Component, Inject } from '@angular/core';
import {TitleCasePipe} from '@angular/common';
import { MontarStore } from '../../../../services/montar.store';
import {CATALOGO_CAPTADORES} from '../../../../data/captadores';
import {Captador, PosiCaptador} from '../../../../data/modelos/guitarra.modelos';

@Component({
  imports: [TitleCasePipe],
  selector: 'app-captador-step',
  styleUrls: ['./captador-step.css', './steps.css'],
  templateUrl: './captador-step.html',
})
export class CaptadorStep {
  private store = Inject(MontarStore);
  readonly montar = this.store.montar;

  readonly posicoes: PosiCaptador[] = ['ponte', 'meio', 'braco'];
  readonly catalogo = CATALOGO_CAPTADORES;

  selected(pos: PosiCaptador): Captador | undefined {
    return this.montar().captadores.find((c: { posicao: string; }) => c.posicao === pos);
  }

  pick(pos: PosiCaptador, c: Captador) { 
    this.store.setCaptador(pos, c);
  }

  clear(pos: PosiCaptador) {
    this.store.setCaptador(pos, { ...this.catalogo[pos][0], id: 'none', model: '—', price: 0, position: pos });
  }
}
