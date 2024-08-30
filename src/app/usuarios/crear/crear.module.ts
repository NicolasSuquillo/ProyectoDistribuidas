import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrearUsuarioComponent } from './crear.component';

@NgModule({
  declarations: [CrearUsuarioComponent],
  imports: [CommonModule, FormsModule],
  exports: [CrearUsuarioComponent]
})
export class CrearUsuarioModule {}
