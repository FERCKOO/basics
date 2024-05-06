import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { mainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/dbz/components/list/list.component';
import { AddCharacterComponent } from './components/dbz/components/add-character/add-character.component';

@NgModule({
  exports: [
    mainPageComponent,
  ],
  declarations: [
    mainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
