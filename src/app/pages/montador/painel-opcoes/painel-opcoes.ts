import { Component, signal } from '@angular/core';
import {TitleCasePipe} from '@angular/common';
import {CorpoStep} from './steps/corpo-step';
import {BracoStep} from './steps/braco-step';
import {CaptadorStep} from './steps/captador-step';
import {HardwareStep} from './steps/hardware-step';

type Step = 'corpo' | 'braco' | 'captadores' | 'hardware';

@Component({
  imports: [TitleCasePipe, CorpoStep, BracoStep, 
    CaptadorStep, HardwareStep],
  selector: 'app-painel-opcoes',
  styleUrl: './painel-opcoes.css',
  templateUrl: './painel-opcoes.html',
})
export class PainelOpcoes {
  readonly steps: Step[] = ['corpo', 'braco', 'captadores', 'hardware'];
  readonly current = signal<Step>('corpo');
}
