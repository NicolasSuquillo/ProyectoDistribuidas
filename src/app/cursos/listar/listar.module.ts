import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListarCursosComponent } from './listar.component';

@NgModule({
  declarations: [ListarCursosComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [ListarCursosComponent]
})
export class ListarCursosModule {}
