import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 100000
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 768
    },
    {
      id: uuid(),
      name: 'Picollo',
      power: 50000
    },
  ]

  AddCharacter(character: Character):void {
    character.id = uuid();

        this.characters.push(character);
  }

  onDeleteById(id: string):void{
    this.characters = this.characters.filter(character => character.id !== id);
  }


  constructor() { }

}
