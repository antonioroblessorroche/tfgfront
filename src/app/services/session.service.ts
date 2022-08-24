import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { TrainingSession } from '../models/trainingSession';
import { TrainingSessionContent } from '../models/trainingSessionContent';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  trainingSessionUrl = environment.apiUrl + 'api/trainingSession/';

  constructor(private httpClient: HttpClient) { }

  public lista(page: number): Observable<TrainingSessionContent> {
    return this.httpClient.get<TrainingSessionContent>(this.trainingSessionUrl + '?page=' + page);
  }

  public listaByUser(page: number, user: string): Observable<TrainingSessionContent> {
    return this.httpClient.get<TrainingSessionContent>(this.trainingSessionUrl + '?page=' + page + '&user=' + user);
  }

  public listaByUserAndDate(page: number, user: string, year: number, month: number, day: number): Observable<TrainingSessionContent> {
    return this.httpClient.get<TrainingSessionContent>(this.trainingSessionUrl + '?page=' + page + '&user=' + user
      + '&day=' + day + '&month=' + month + '&year=' + year);
  }

  public detalle(id: number): Observable<TrainingSession> {  
    return this.httpClient.get<TrainingSession>(this.trainingSessionUrl + id);
  }

  public nuevo(trainingSession: TrainingSession): Observable<any> {  
    return this.httpClient.post<any>(this.trainingSessionUrl, trainingSession);
  }

  public actualizar(id: string, trainingSession: TrainingSession): Observable<any> {
    return this.httpClient.put<any>(this.trainingSessionUrl + id, trainingSession);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.trainingSessionUrl + id);
  }

}
