import { Component, Inject } from '@angular/core';
import { MontarStore } from '../../../../services/montar.store';
import { FORMATOS, ESCUDOS } from '../../../../data/formatos';
import {CORES, MADEIRAS} from '../../../../data/cores';
import {CorAcabamento, TipoMadeira} from '../../../../data/modelos/guitarra.modelos';

@Component({
  imports: [],
  selector: 'app-corpo-step',
  styleUrl: './steps.css',
  templateUrl: './corpo-step.html',
})
export class CorpoStep {
  private store = Inject(MontarStore);
  readonly montar = this.store.montar;

  readonly formatos = Object.values(FORMATOS);
  readonly cores = CORES;
  readonly madeiras = MADEIRAS;

  setFormato(id: string) {
    this.store.setBody({ formato: id });
  }

  setMadeira(madeira: TipoMadeira) {
    this.store.setBody({ madeira });
  }

  setCor(c: CorAcabamento) {
    this.store.setBody({ acabamento: c });
  }

  setEscudo(hex: string) {
    this.store.setBody({ escudo: hex });
  }
  semEscudo() {
    this.store.setBody({ escudo: undefined });
  }
}
