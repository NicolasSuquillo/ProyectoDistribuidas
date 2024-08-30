import { Component } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { Curso } from '../../models/curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearCursoComponent {
  curso: Curso = { id:0,nombre: '',cursoUsuarios: [] };

  constructor(private cursosService: CursosService, private router: Router) { }

  crearCurso(): void {
    this.cursosService.crear(this.curso).subscribe(() => {
      this.router.navigate(['/cursos']);
    });
  }

}
