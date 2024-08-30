// listar-usuarios.component.ts
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.listar().subscribe(data => {
      this.usuarios = data;
    });
  }

  eliminarUsuario(id: number): void {
    this.usuariosService.eliminar(id).subscribe(() => {
      this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
    });
  }

  editarUsuario(id: number): void {
    // Lógica para editar usuario
  }
}
