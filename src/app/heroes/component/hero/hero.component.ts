import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  template: `
      <h1>{{nombreHeroe}}</h1>

    <dl>
      <td>Nombre: </td>
      <dd>{{nombreReal}}</dd>

      <td>Edad: </td>
      <dd>{{edad}}</dd>

      <td>Metodo: </td>
      <dd>{{getHeroDescription()}}</dd>

      <td>Capitalizado: </td>
      <dd>{{capitaliceName()}}</dd>

    </dl>

    <button class="btn btn-primary mx-2" (click)="cambiarNombre()" *ngIf="nombreHeroe.match('Spider-man')">
      Cambiar Nombre
    </button>

    <button class="btn btn-primary" (click)="cambiarEdad()" *ngIf="edad.toString().match('18')">
      Cambiar Edad
    </button>

    <button class="btn btn-primary mx-2" (click)="reset()" >
      Reset
    </button>
  `
})

export class HeroComponent {

  constructor() { }

  public nombreReal: string = 'Peter Parker'
  public nombreHeroe: string = 'Spider-man'
  public edad: number = 18

  capitaliceName(): string {
    return this.nombreHeroe.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.nombreReal} - ${this.nombreHeroe} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombreHeroe = 'Ironman'
    this.nombreReal = 'Tont Stark'
  }

  cambiarEdad(): void {
    this.edad = 30
  }

  reset(): void {
    this.nombreReal = 'Peter Parker'
    this.nombreHeroe = 'Spider-man'
    this.edad = 18
  }
}
