import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainingClass } from '../models/trainingClass';
import { TrainingClassReservation } from '../models/trainingClassReservation';
import { TrainingClassContent } from '../models/trainingClassContent';
import { TrainingClassReservationContent } from '../models/trainingClassReservationContent';
import { environment } from '../environment';


@Injectable({
  providedIn: 'root'
})
export class TrainingClassService {

  trainingClassUrl = environment.apiUrl + 'api/trainingClass/';
  trainingClassReservationUrl = environment.apiUrl + 'api/trainingClassReservation/';

  constructor(private httpClient: HttpClient) { }

  public reservar(trainingClassReservation: TrainingClassReservation): Observable<any> {
    return this.httpClient.post<any>(this.trainingClassReservationUrl, trainingClassReservation);
  }

  public lista(page: number): Observable<TrainingClassContent> {
    return this.httpClient.get<TrainingClassContent>(this.trainingClassUrl + '?page=' + page);
  }

  public listaByStartEndDate(page: number, start: number, end:number): Observable<TrainingClassContent> {
    return this.httpClient.get<TrainingClassContent>(this.trainingClassUrl + '?page=' + page + '&timeStart=' + start + '&timeEnd=' + end);
  }

  public listaByStartEndDateAndName(page: number, start: number, end:number, name:string): Observable<TrainingClassContent> {
    return this.httpClient.get<TrainingClassContent>(this.trainingClassUrl + '?page=' + page + '&timeStart=' + start + '&timeEnd=' + end + '&name=' + name);
  }

  public listaByUser(page: number, user: string): Observable<TrainingClassContent> {
    return this.httpClient.get<TrainingClassContent>(this.trainingClassUrl + '?page=' + page + '&user=' + user);
  }

  public listaByUserAndDate(page: number, user: string, timeEnd: number): Observable<TrainingClassReservationContent> {
    return this.httpClient.get<TrainingClassReservationContent>(this.trainingClassReservationUrl + '?page=' + page + '&user=' + user
      + '&timeEnd=' + timeEnd);
  }

  public detalle(id: number): Observable<TrainingClass> {  
    return this.httpClient.get<TrainingClass>(this.trainingClassUrl + id);
  }

  public nuevo(trainingClass: TrainingClass): Observable<any> {  
    return this.httpClient.post<any>(this.trainingClassUrl, trainingClass);
  }

  public actualizar(id: string, trainingClass: TrainingClass): Observable<any> {
    return this.httpClient.put<any>(this.trainingClassUrl + id, trainingClass);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.trainingClassUrl + id);
  }

  public deleteReservation(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.trainingClassReservationUrl + id);
  }

}
