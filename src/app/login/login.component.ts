import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  login() {
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      response => {
        // Aquí puedes guardar el token en el localStorage o sessionStorage
        // localStorage.setItem('authToken', response.token);

        // Mostrar mensaje de éxito
        this.snackBar.open('Inicio de sesión exitoso', 'Cerrar', {
          duration: 3000, // Duración en milisegundos
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });

        // Redirigir después de un breve retraso
        setTimeout(() => {
          this.router.navigate(['/usuarios/listar']);
        }, 3000); // Tiempo debe coincidir con la duración del mensaje de éxito
      },
      error => {
        // Mostrar mensaje de error con Snackbar
        if (error.error && error.error.error) {
          this.snackBar.open(error.error.error, 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
        } else {
          this.snackBar.open('Error en la autenticación, por favor intente nuevamente', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
        }
      }
    );
  }
}
