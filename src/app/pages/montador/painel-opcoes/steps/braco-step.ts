import { Component, Inject} from '@angular/core';
import { MontarStore } from '../../../../services/montar.store';
import {MADEIRAS} from '../../../../data/cores';

@Component({
  imports: [],
  selector: 'app-braco-step',
  styleUrl: './steps.css',
  templateUrl: './braco-step.html',
})
export class BracoStep {
  private store = Inject(MontarStore);
  readonly montar = this.store.montar;

  readonly madeiras = MADEIRAS;

  setMadeira(madeira: any) {
    this.store.setNeck({ madeira });
  }

  setEscalaMadeira(madeira: any) {
    this.store.setNeck({ escalaMadeira: madeira });
  }

  setEscalaRaio(raio: number) {
    this.store.setNeck({ escalaRaio: raio });
  }
  
  setFrets(frets: number) {
    this.store.setNeck({ frets });
  }
}
