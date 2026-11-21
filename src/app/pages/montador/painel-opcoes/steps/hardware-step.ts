import { Component, Inject } from '@angular/core';
import { MontarStore } from '../../../../services/montar.store';
import {COR_HARDWARE} from '../../../../data/cores';

@Component({
  imports: [],
  selector: 'app-hardware-step',
  styleUrl: './steps.css',
  templateUrl: './hardware-step.html',
})
export class HardwareStep {
  private store = Inject(MontarStore);
  readonly montar = this.store.montar;

  readonly cores = COR_HARDWARE;

  setCor(hex: string) {
    this.store.setHardware(hex);
  }

  setPonte(tipo: string) {
    this.store.setPonte({ tipo });
  }
}
