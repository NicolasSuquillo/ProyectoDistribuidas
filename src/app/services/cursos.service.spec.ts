import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CursosService } from './cursos.service';
import { Curso } from '../models/curso';
import { Usuario } from '../models/usuario';

describe('CursosService', () => {
  let service: CursosService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://localhost:8002/cursos';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CursosService]
    });
    service = TestBed.inject(CursosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should list cursos', () => {
    const dummyCursos: Curso[] = [
      { id: 1, nombre: 'Curso 1', cursoUsuarios: [] },
      { id: 2, nombre: 'Curso 2', cursoUsuarios: [] }
    ];

    service.listar().subscribe(cursos => {
      expect(cursos.length).toBe(2);
      expect(cursos).toEqual(dummyCursos);
    });

    const request = httpMock.expectOne(`${apiUrl}/listar`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyCursos);
  });

  it('should get curso details', () => {
    const id = 1;
    const dummyCurso: Curso = { id, nombre: 'Curso 1', cursoUsuarios: [] };

    service.detalle(id).subscribe(curso => {
      expect(curso).toEqual(dummyCurso);
    });

    const request = httpMock.expectOne(`${apiUrl}/detalle/${id}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyCurso);
  });

  it('should create a curso', () => {
    const newCurso: Curso = { id: 3, nombre: 'Curso 3', cursoUsuarios: [] };

    service.crear(newCurso).subscribe(curso => {
      expect(curso).toEqual(newCurso);
    });

    const request = httpMock.expectOne(`${apiUrl}/crearCurso`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(newCurso);
    request.flush(newCurso);
  });

  it('should edit a curso', () => {
    const id = 1;
    const updatedCurso: Curso = { id, nombre: 'Curso Actualizado', cursoUsuarios: [] };

    service.editar(id, updatedCurso).subscribe(curso => {
      expect(curso).toEqual(updatedCurso);
    });

    const request = httpMock.expectOne(`${apiUrl}/editarCurso/${id}`);
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(updatedCurso);
    request.flush(updatedCurso);
  });

  it('should delete a curso', () => {
    const id = 1;

    service.eliminar(id).subscribe(response => {
      expect(response).toBeUndefined();
    });

    const request = httpMock.expectOne(`${apiUrl}/eliminarCurso/${id}`);
    expect(request.request.method).toBe('DELETE');
    request.flush({});
  });

  it('should assign a usuario to a curso', () => {
    const idcurso = 1;
    const dummyUsuario: Usuario = { id: 1, nombre: 'Usuario 1', email: 'usuario1@example.com', password: '121232' };

    service.asignarUsuario(idcurso, dummyUsuario).subscribe(response => {
      expect(response).toEqual(dummyUsuario);
    });

    const request = httpMock.expectOne(`${apiUrl}/asignar-usuario/${idcurso}`);
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(dummyUsuario);
    request.flush(dummyUsuario);
  });
});
