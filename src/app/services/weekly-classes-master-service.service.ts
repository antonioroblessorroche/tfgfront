import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeeklyClassMaster } from '../models/WeeklyClassMaster';
import { WeeklyClass } from '../models/WeeklyClass';
import { WeeklyClassContent } from '../models/weeklyClassContent';
import { GenerateClass } from '../models/generateClass';
import { WeeklyClassMasterContent } from '../models/weeklyClassesMasterContent';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class WeeklyClassesMasterServiceService {


  classUrl = environment.apiUrl + 'api/weeklyClasses/';
  
  constructor(private httpClient: HttpClient) { }
  
  public lista(page: number): Observable<WeeklyClassContent> {
    return this.httpClient.get<WeeklyClassContent>(this.classUrl + '?page=' + page);
  }

  public listaAll(size: number): Observable<WeeklyClassContent> {
    return this.httpClient.get<WeeklyClassContent>(this.classUrl + '?size=' + size);
  }
  
  public listaByName(page: number, searchValue: string): Observable<WeeklyClassContent> {
    return this.httpClient.get<WeeklyClassContent>(this.classUrl + '?page=' + page + '&name=' + searchValue);
  }
  
  public detalle(id: number): Observable<WeeklyClass> {  
    return this.httpClient.get<WeeklyClass>(this.classUrl + id);
  }
  
  public nuevo(classMaster: WeeklyClass): Observable<any> {  
    return this.httpClient.post<any>(this.classUrl, classMaster);
  }
  
  public actualizar(id: string, classMaster: WeeklyClass): Observable<any> {
    return this.httpClient.put<any>(this.classUrl + id, classMaster);
  }
  
  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.classUrl + id);
  }
  
  public generar(): Observable<WeeklyClass> {  
    return this.httpClient.get<WeeklyClass>(this.classUrl + 'generate');
  }

  public copyFrom(generateClass: GenerateClass): Observable<any> {  
    return this.httpClient.post<any>(this.classUrl + 'copyFrom', generateClass);
  }
  
  classMasterUrl = environment.apiUrl + 'api/master/weeklyClasses/';
  
  public listaMaster(page: number): Observable<WeeklyClassMasterContent> {
    return this.httpClient.get<WeeklyClassMasterContent>(this.classMasterUrl + '?page=' + page);
  }

  public listaMasterAll(size: number): Observable<WeeklyClassMasterContent> {
    return this.httpClient.get<WeeklyClassMasterContent>(this.classMasterUrl + '?size=' + size);
  }

  public listaByNameMaster(page: number, searchValue: string): Observable<WeeklyClassMasterContent> {
    return this.httpClient.get<WeeklyClassMasterContent>(this.classMasterUrl + '?page=' + page + '&name=' + searchValue);
  }

  public detalleMaster(id: number): Observable<WeeklyClassMaster> {  
    return this.httpClient.get<WeeklyClassMaster>(this.classMasterUrl + id);
  }

  public nuevoMaster(classMaster: WeeklyClassMaster): Observable<any> {  
    return this.httpClient.post<any>(this.classMasterUrl, classMaster);
  }

  public actualizarMaster(id: string, classMaster: WeeklyClassMaster): Observable<any> {
    return this.httpClient.put<any>(this.classMasterUrl + id, classMaster);
  }

  public deleteMaster(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.classMasterUrl + id);
  }

  public generarMaster(): Observable<WeeklyClassMaster> {  
    return this.httpClient.get<WeeklyClassMaster>(this.classMasterUrl + 'generate');
  }

}
