import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-montador',
  styleUrl: './montador.css',
  templateUrl: './montador.html',
})
export class Montador {
  section = signal<'corpo' | 'braco' | 'hardware'>('corpo');

  setSection(s: 'corpo' | 'braco' | 'hardware') {
    this.section.set(s)
  }
}
