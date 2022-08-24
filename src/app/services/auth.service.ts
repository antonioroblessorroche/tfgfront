import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';
import { Message } from '../models/Message';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { ReducedUser } from '../models/reducedUser';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL =  environment.apiUrl + 'auth/';
  constructor(private httpClient: HttpClient) { }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }

  public registro(nuevoUsuario: NuevoUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public registroByAdmin(nuevoUsuario: NuevoUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'admin/nuevo', nuevoUsuario);
  }

  public newPass(usuario: NuevoUsuario): Observable<Message> {
    return this.httpClient.post<Message>(this.authURL + 'newpass', usuario);
  }

  public newMail(usuario: ReducedUser): Observable<Message> {
    return this.httpClient.post<Message>(this.authURL + 'changemail', usuario);
  }
  public newName(usuario: ReducedUser): Observable<Message> {
    return this.httpClient.post<Message>(this.authURL + 'changename', usuario);
  }
  public newUsername(usuario: ReducedUser): Observable<Message> {
    return this.httpClient.post<Message>(this.authURL + 'changeusername', usuario);
  }
  public cambioPass(usuario: ReducedUser): Observable<Message> {
    return this.httpClient.post<Message>(this.authURL + 'changepass', usuario);
  }
  public addComments(usuario: ReducedUser): Observable<Message> {
    return this.httpClient.post<Message>(this.authURL + 'comments', usuario);
  }

}
