import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { UsuariosService } from '../../services/usuarios.service';
import { Curso } from '../../models/curso';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarCursosComponent implements OnInit {
  cursos: Curso[] = [];
  usuarios: Usuario[] = [];
  cursoSeleccionado: number | null = null;
  usuarioSeleccionado: Usuario | null = null;
  mostrarFormularioAsignacion = false;
  usuariosMap: Map<number, Usuario> = new Map(); // Para almacenar usuarios por ID

  constructor(
    private cursosService: CursosService,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.cursosService.listar().subscribe(data => {
      this.cursos = data;
    });
    this.usuariosService.listar().subscribe(data => {
      this.usuarios = data;
      this.usuarios.forEach(usuario => this.usuariosMap.set(usuario.id, usuario));
    });
  }

  eliminarCurso(id: number): void {
    if (id !== undefined) {
      this.cursosService.eliminar(id).subscribe(() => {
        this.cursos = this.cursos.filter(curso => curso.id !== id);
      });
    }
  }

  asignarUsuario(): void {
    if (this.cursoSeleccionado !== null && this.usuarioSeleccionado !== null) {
      // Crear el objeto Usuario con el id requerido
      const usuario: Usuario = {
        id: this.usuarioSeleccionado.id,
        nombre: this.usuarioSeleccionado.nombre,
        email: this.usuarioSeleccionado.email,
        password: this.usuarioSeleccionado.password
      };

      console.log('Asignación:', usuario);

      this.cursosService.asignarUsuario(this.cursoSeleccionado, usuario).subscribe({
        next: () => {
          alert('Usuario asignado con éxito');
          this.ngOnInit();  // Recarga los datos
        },
        error: (err) => {
          console.error('Error al asignar usuario:', err);
          alert('Error al asignar usuario');
        }
      });
    } else {
      alert('Debe seleccionar un curso y un usuario');
    }
  }

  getUsuarioNombre(usuarioId: number): string {
    const usuario = this.usuariosMap.get(usuarioId);
    return usuario ? usuario.nombre : 'Desconocido';
  }
}
