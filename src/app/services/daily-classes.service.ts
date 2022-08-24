import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DailyClasses } from '../models/dailyClasses';
import { DailyClassesContent } from '../models/dailyClassesContent';
import { DailyClassesMasterContent } from '../models/dailyClassesMasterContent';
import { DailyClassesMaster } from '../models/dailyClassMaster';
import { TrainingClassReservation } from '../models/trainingClassReservation';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class DailyClassesService {


  classMasterUrl = environment.apiUrl + 'api/master/dailyClass/';
  classUrl = environment.apiUrl + 'api/dailyClass/';

  constructor(private httpClient: HttpClient) { }


  public lista(page: number): Observable<DailyClassesContent> {
    return this.httpClient.get<DailyClassesContent>(this.classUrl + '?page=' + page);
  }

  public listaByName(page: number, searchValue: string): Observable<DailyClassesContent> {
    return this.httpClient.get<DailyClassesContent>(this.classUrl + '?page=' + page + '&name=' + searchValue);
  }

  public listaByDate(page: number, date: number): Observable<DailyClassesContent> {
    return this.httpClient.get<DailyClassesContent>(this.classUrl + 'date?size=100&page=' + page + '&date=' + date);
  }  

  public detalle(id: string): Observable<DailyClasses> {  
    return this.httpClient.get<DailyClasses>(this.classUrl + id );
  }

  public detalleForUser(id: string, user: string): Observable<DailyClasses> {  
    return this.httpClient.get<DailyClasses>(this.classUrl + id + '/user/' + user);
  }

  public inscripcionesUsuario(): Observable<DailyClasses> {  
    return this.httpClient.get<DailyClasses>(this.classUrl + 'user/uptodate');
  }
  
  public inscripcionesClase(id: string, sessionId: string): Observable<TrainingClassReservation[]> {  
    return this.httpClient.get<TrainingClassReservation[]>(this.classUrl + id + '/inscriptions/' + sessionId);
  }

  public inscripcion(idDailyClass: string, user: string, idSession: string): Observable<any> {  
    return this.httpClient.post<any>(this.classUrl + idDailyClass + '/join/' + user + '/session/' + idSession, idDailyClass);
  }

  public inscripcionByAdmin(idDailyClass: string, user: string, idSession: string): Observable<any> {  
    return this.httpClient.post<any>(this.classUrl + idDailyClass + '/joinByAdmin/' + user + '/session/' + idSession, idDailyClass);
  }

  public eliminacion(idDailyClass: string, user: string, idSession: string): Observable<any> {  
    return this.httpClient.post<any>(this.classUrl + idDailyClass + '/decline/' + user + '/session/' + idSession, idDailyClass);
  }

  public eliminacionAdmin(idDailyClass: string, user: string, idSession: string): Observable<any> {  
    return this.httpClient.post<any>(this.classUrl + idDailyClass + '/declinedByAdmin/' + user + '/session/' + idSession, idDailyClass);
  }

  public nuevo(classMaster: DailyClasses): Observable<any> {  
    return this.httpClient.post<any>(this.classUrl, classMaster);
  }

  public actualizar(id: string, classMaster: DailyClasses): Observable<any> {
    return this.httpClient.put<any>(this.classUrl + id, classMaster);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.classUrl + id);
  }

  public listaMaster(page: number): Observable<DailyClassesMasterContent> {
    return this.httpClient.get<DailyClassesMasterContent>(this.classMasterUrl + '?page=' + page);
  }

  public listaMasterByName(page: number, searchValue: string): Observable<DailyClassesMasterContent> {
    return this.httpClient.get<DailyClassesMasterContent>(this.classMasterUrl + '?page=' + page + '&name=' + searchValue);
  }

  public detalleMaster(id: string): Observable<DailyClassesMaster> {  
    return this.httpClient.get<DailyClassesMaster>(this.classMasterUrl + id);
  }

  public nuevoMaster(classMaster: DailyClassesMaster): Observable<any> {  
    return this.httpClient.post<any>(this.classMasterUrl, classMaster);
  }

  public actualizarMaster(id: string, classMaster: DailyClassesMaster): Observable<any> {
    return this.httpClient.put<any>(this.classMasterUrl + id, classMaster);
  }

  public deleteMaster(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.classMasterUrl + id);
  }

}
