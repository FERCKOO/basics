import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public listHeroes: string[] = ['Spider-man', 'Hulk', 'Ironman', 'Mr. Marvel']
  public heroeBorrado?: string;

  borrarHeroe():void {
    this.heroeBorrado = this.listHeroes.pop()
  }
}
