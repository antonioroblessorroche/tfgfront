import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { TrainingCenter } from '../models/trainingCenter';
import { TrainingCenterContent } from '../models/trainingCenterContent';

@Injectable({
  providedIn: 'root'
})
export class TrainingCenterService {

  trainingcenterUrl = environment.apiUrl + 'api/trainingCenter/';


  constructor(private httpClient: HttpClient) { }

  public lista(size: number): Observable<TrainingCenterContent> {
    return this.httpClient.get<TrainingCenterContent>(this.trainingcenterUrl + '?size=' + size);
  }

  public detalle(id: number): Observable<TrainingCenter> {  
    return this.httpClient.get<TrainingCenter>(this.trainingcenterUrl + id);
  }

  public nuevo(trainingcenter: TrainingCenter): Observable<any> {  
    return this.httpClient.post<any>(this.trainingcenterUrl, trainingcenter);
  }

  public actualizar(id: string, trainingcenter: TrainingCenter): Observable<any> {
    return this.httpClient.put<any>(this.trainingcenterUrl + id, trainingcenter);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.trainingcenterUrl + id);
  }
}
