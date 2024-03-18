import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
          <h3>Counter: {{counter}}</h3>

          <button (click)="incrementar(1)">Agregar 1</button>
          <button (click)="reiniciar()">Reset</button>
          <button (click)="incrementar(-1)">Quitar 1</button>
  `
})

export class counterComponent {
  constructor() { }

  public counter: number = 10;

  incrementar(value: number) {
    this.counter += value;
  }

  reiniciar() {
    this.counter = 10;
  }

}
