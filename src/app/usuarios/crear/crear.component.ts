import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearUsuarioComponent {
  usuario: Usuario = { id: 0,nombre: '', email: '', password: '' };

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  crearUsuario(): void {
    this.usuariosService.crear(this.usuario).subscribe(() => {
      this.router.navigate(['/usuarios']);
    });
  }
}
