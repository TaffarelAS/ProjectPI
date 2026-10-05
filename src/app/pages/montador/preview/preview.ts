import { Component, inject } from '@angular/core';
import { Captador } from './captador/captador';
import { Ponte } from './ponte/ponte';
import { MontarStore } from '../../../services/montar.store';
import {FORMATOS, CABEÇOTES, ESCUDOS} from '../../../data/formatos';

@Component({
  imports: [Captador, Ponte],
  selector: 'app-preview',
  styleUrl: './preview.css',
  templateUrl: './preview.html',
})

export class Preview {

  private store = inject(MontarStore);
  readonly montar = this.store.montar;
  readonly formatos = FORMATOS;
  readonly cabecotes = CABEÇOTES;
  readonly escudos = ESCUDOS;
  
}
