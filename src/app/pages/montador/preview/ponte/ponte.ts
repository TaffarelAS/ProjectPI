import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ponte',
  template: ` <svg>
    <g transform="translate(150 520)">
      <rect x="0" y="0" width="100" height="20" rx="4"
            [style.fill]="cor" stroke="#111" stroke-width="1" />
    </g>
  `,
    styles: [`:host { filter: drop-shadow(0 2px 3px rgba(0,0,0,.35)); }`],
})
export class Ponte {
  @Input() type = '';
  @Input() material = '';
  @Input() cor = '#c0c0c0';
}
