import { Component } from '@angular/core';
import { Preview} from './preview/preview';
import { PainelOpcoes } from './painel-opcoes/painel-opcoes';

@Component({
  imports: [Preview, PainelOpcoes],
  selector: 'app-montador',
  styleUrl: './montador.css',
  templateUrl: './montador.html',
})
export class Montador {}
