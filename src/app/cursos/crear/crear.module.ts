import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrearCursoComponent } from './crear.component';

@NgModule({
  declarations: [CrearCursoComponent],
  imports: [CommonModule, FormsModule],
  exports: [CrearCursoComponent] // Exporta el componente si es necesario en otros módulos
})
export class CrearCursoModule {}
