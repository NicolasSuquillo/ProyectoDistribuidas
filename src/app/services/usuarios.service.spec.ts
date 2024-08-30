import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsuariosService } from './usuarios.service';
import { Usuario } from '../models/usuario';

describe('UsuariosService', () => {
  let service: UsuariosService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://localhost:8001/usuarios';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuariosService]
    });
    service = TestBed.inject(UsuariosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should list usuarios', () => {
    const dummyUsuarios: Usuario[] = [
      { id: 1, nombre: 'Usuario 1', email: 'usuario1@example.com', password: '2222' },
      { id: 2, nombre: 'Usuario 2', email: 'usuario2@example.com', password: '1111' }
    ];

    service.listar().subscribe(usuarios => {
      expect(usuarios.length).toBe(2);
      expect(usuarios).toEqual(dummyUsuarios);
    });

    const request = httpMock.expectOne(`${apiUrl}/listar`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyUsuarios);
  });

  it('should get usuario details', () => {
    const id = 1;
    const dummyUsuario: Usuario = { id, nombre: 'Usuario 1', email: 'usuario1@example.com', password: '' };

    service.detalle(id).subscribe(usuario => {
      expect(usuario).toEqual(dummyUsuario);
    });

    const request = httpMock.expectOne(`${apiUrl}/detalle/${id}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyUsuario);
  });

  it('should create a usuario', () => {
    const newUsuario: Usuario = { id: 3, nombre: 'Usuario 3', email: 'usuario3@example.com', password: '' };

    service.crear(newUsuario).subscribe(usuario => {
      expect(usuario).toEqual(newUsuario);
    });

    const request = httpMock.expectOne(`${apiUrl}/crearUsuario`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(newUsuario);
    request.flush(newUsuario);
  });

  it('should edit a usuario', () => {
    const id = 1;
    const updatedUsuario: Usuario = { id, nombre: 'Usuario Actualizado', email: 'usuario_actualizado@example.com', password: '' };

    service.editar(id, updatedUsuario).subscribe(usuario => {
      expect(usuario).toEqual(updatedUsuario);
    });

    const request = httpMock.expectOne(`${apiUrl}/editarUsuario/${id}`);
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(updatedUsuario);
    request.flush(updatedUsuario);
  });

  it('should delete a usuario', () => {
    const id = 1;

    service.eliminar(id).subscribe(response => {
      expect(response).toBeUndefined();
    });

    const request = httpMock.expectOne(`${apiUrl}/eliminarUsuario/${id}`);
    expect(request.request.method).toBe('DELETE');
    request.flush({});
  });
});
