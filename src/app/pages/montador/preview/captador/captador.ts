import { Component, Input } from '@angular/core';
import { Captador as CaptadorModelo } from '../../../../data/modelos/guitarra.modelos';

@Component({
  imports: [],
  selector: 'app-captador',
  styleUrl: './captador.css',
  templateUrl: './captador.html',
})
export class Captador { 
  @Input ({ required: true }) captador!: CaptadorModelo;

  transformForPosition(): string {
    const y = { braco: 380, meio: 430, ponte: 480 }[this.captador.posicao];
    return `translate(150 ${y}) scale(0.35)`;
  }
}
