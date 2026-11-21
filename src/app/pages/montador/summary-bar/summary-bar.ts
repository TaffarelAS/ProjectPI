import { Component, Inject } from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import { MontarStore } from '../../../services/montar.store';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-summary-bar',
  styleUrl: './summary-bar.css',
  templateUrl: './summary-bar.html',
})
export class SummaryBar {
  private store = Inject(MontarStore);
  readonly total = this.store.precoTotal;
  readonly warnings = this.store.warnings;

  reset() {
    if (confirm('Deseja realmente reiniciar a montagem?')) {
      this.store.reset();
    }
  }
}
