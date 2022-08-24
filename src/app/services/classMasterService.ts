import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { ClassMaster } from '../models/classMaster';
import { ClassMasterContent } from '../models/classMasterContent';


@Injectable({
  providedIn: 'root'
})
export class ClassMasterService {

  classMasterUrl = environment.apiUrl +'api/classMaster/';

  constructor(private httpClient: HttpClient) { }

  public lista(page: number): Observable<ClassMasterContent> {
    return this.httpClient.get<ClassMasterContent>(this.classMasterUrl + '?page=' + page);
  }

  public listaCompleta(): Observable<ClassMasterContent> {
    return this.httpClient.get<ClassMasterContent>(this.classMasterUrl + '?page=0&size=10000');
  }

  public listaByName(page: number, searchValue: string): Observable<ClassMasterContent> {
    return this.httpClient.get<ClassMasterContent>(this.classMasterUrl + '?page=' + page + '&name=' + searchValue);
  }

  public detalle(id: number): Observable<ClassMaster> {  
    return this.httpClient.get<ClassMaster>(this.classMasterUrl + id);
  }

  public nuevo(classMaster: ClassMaster): Observable<any> {  
    return this.httpClient.post<any>(this.classMasterUrl, classMaster);
  }

  public actualizar(id: string, classMaster: ClassMaster): Observable<any> {
    return this.httpClient.put<any>(this.classMasterUrl + id, classMaster);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.classMasterUrl + id);
  }

}
