import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { ReducedUser } from '../models/reducedUser';
import { ReducedUserContent } from '../models/reducedUserContent';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = environment.apiUrl + 'api/user/';

  userData = environment.apiUrl + 'api/userdata/';


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<ReducedUser[]> {
    return this.httpClient.get<ReducedUser[]>(this.userUrl);
  }

  public detalle(id: number): Observable<ReducedUser> {  
    return this.httpClient.get<ReducedUser>(this.userUrl + id);
  }

  public findByUser(user: string): Observable<ReducedUser> {  
    return this.httpClient.get<ReducedUser>(this.userUrl + '?user=' + user);
  }

  public nuevo(user: ReducedUser): Observable<any> {  
    return this.httpClient.post<any>(this.userUrl, user);
  }

  public actualizar(id: string, user: ReducedUser): Observable<any> {
    return this.httpClient.put<any>(this.userUrl + id, user);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.userUrl + id);
  }

  public userList(regex: string, page: number): Observable<ReducedUserContent> {
    return this.httpClient.get<ReducedUserContent>(this.userData + '?page=' + page + '&regex=' + regex);
  }

  public userdataById(id: string): Observable<ReducedUser> {
    return this.httpClient.get<ReducedUser>(this.userData + id);
  }

  public userdataByUsername(username: string): Observable<ReducedUser> {
    return this.httpClient.get<ReducedUser>(this.userData + 'username/' + username);
  }

}