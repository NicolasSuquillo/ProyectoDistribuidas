import { Routes } from '@angular/router';
import { ListarUsuariosComponent } from './usuarios/listar/listar.component';
import { CrearUsuarioComponent } from './usuarios/crear/crear.component';
import { EditarUsuarioComponent } from './usuarios/editar/editar.component';
import { ListarCursosComponent } from './cursos/listar/listar.component';
import { CrearCursoComponent } from './cursos/crear/crear.component';
import { EditarCursoComponent } from './cursos/editar/editar.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },  // Ruta para login
  { path: 'usuarios/listar', component: ListarUsuariosComponent},
  { path: 'usuarios/crear', component: CrearUsuarioComponent},
  { path: 'usuarios/editar/:id', component: EditarUsuarioComponent},
  { path: 'cursos/listar', component: ListarCursosComponent},
  { path: 'cursos/crear', component: CrearCursoComponent },
  { path: 'cursos/editar/:id', component: EditarCursoComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirige a login por defecto
  { path: '**', redirectTo: '/login' }  // Redirige a login para rutas no encontradas
];
