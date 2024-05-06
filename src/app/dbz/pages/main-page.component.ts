import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';
import { DbzModule } from './../dbz.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class mainPageComponent {

  constructor(private dbzService: DbzService){

  }

  get Characters() : Character[]{
    return [...this.dbzService.characters]
  }

  onDeleteCharacter(id : string): void{
    this.dbzService.onDeleteById(id);
  }

  onNewCharacter(character : Character): void{
    this.dbzService.AddCharacter(character);
  }

}
