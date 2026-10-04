import { Component } from '@angular/core';
import { Preview} from './preview/preview';
import { PainelOpcoes } from './painel-opcoes/painel-opcoes';
import { SummaryBar } from './summary-bar/summary-bar';

@Component({
  imports: [Preview, PainelOpcoes, SummaryBar],
  selector: 'app-montador',
  styleUrl: './montador.css',
  templateUrl: './montador.html',
})
export class Montador {}
