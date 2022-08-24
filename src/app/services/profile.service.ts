import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { Profile } from '../models/profile';
import { ReducedUser } from '../models/reducedUser';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profileUrl = environment.apiUrl + 'api/profile/';


  constructor(private httpClient: HttpClient) { }


  public detalle(id: number): Observable<Profile> {  
    return this.httpClient.get<Profile>(this.profileUrl + id);
  }

  public findByUser(user: string): Observable<ReducedUser> {  
    return this.httpClient.get<ReducedUser>(this.profileUrl + '?username=' + user);
  }

  public nuevo(profile: Profile): Observable<any> {  
    return this.httpClient.post<any>(this.profileUrl, profile);
  }

  public actualizar(id: string, profile: Profile): Observable<any> {
    return this.httpClient.put<any>(this.profileUrl + id, profile);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.profileUrl + id);
  }

}
