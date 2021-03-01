import { Chave } from './../../../dominio/chave';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/dominio/usuario';
import { environment } from 'src/environments/environment';

@Injectable()
export class UsuarioService {

  url = `${environment.apiUrl}/usuarios`;

  constructor(private http: HttpClient) { }

  buscarUsuarioPorChave(chave: Chave): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}/usuarios/login/`, chave);
  }

  buscarUsuarioPorId(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/usuarios/${id}`);
  }

  buscarUsuarioPorEmail(email: string): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/usuarios/email/${email}`);
  }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.url}/usuarios`);
  }

  salvarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.url}/usuarios`, usuario);
  }

  editarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.url}/usuarios`, usuario);
  }

  deletarUsuario(id: number): Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.url}/usuarios/${id}`);
  }
}
