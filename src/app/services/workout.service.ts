import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { Workout } from '../models/workout';
import { WorkoutContent } from '../models/workoutContent';


@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  workoutUrl = environment.apiUrl + 'api/workout/';

  constructor(private httpClient: HttpClient) { }

  public lista(page: number): Observable<WorkoutContent> {
    return this.httpClient.get<WorkoutContent>(this.workoutUrl + '?page=' + page);
  }

  public listaCompleta(): Observable<WorkoutContent> {
    return this.httpClient.get<WorkoutContent>(this.workoutUrl + '?page=0&size=1000');
  }

  public listaByName(page: number, regex: string): Observable<WorkoutContent> {
    return this.httpClient.get<WorkoutContent>(this.workoutUrl + '?page=' + page + '&regex=' + regex);
  }

  public detalle(id: number): Observable<Workout> {  
    return this.httpClient.get<Workout>(this.workoutUrl + id);
  }

  public nuevo(workout: Workout): Observable<any> {  
    return this.httpClient.post<any>(this.workoutUrl, workout);
  }

  public actualizar(id: string, workout: Workout): Observable<any> {
    return this.httpClient.put<any>(this.workoutUrl + id, workout);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.workoutUrl + id);
  }

}
