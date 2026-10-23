// import { CommonModule } from '@angular/common'; <- Talvez necessario se a versão do Angular for menor que 16, não lembro a versão usada em sala.
import { Component, signal } from '@angular/core';

// Signal utilizado para guardar o valor dos tipos de cada seção e notificar
// ao Angular quando o valor for alterado, no momento utilizado nas opçoes 
// apenas, planejo utilizar para alterar a guitarra, e somar valores para preço final.

@Component({
  imports: [], // <- por o commonModule aqui tambem se necessario, se a versão for antiga, [class.active] não vai funcionar sem o commonModule.
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
