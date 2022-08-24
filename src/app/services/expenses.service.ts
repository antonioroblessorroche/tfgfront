import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { Expense } from '../models/expense';
import { ExpenseContent } from '../models/expenseContent';
import { ExpenseSummary } from '../models/ExpensesSummary';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  url = environment.apiUrl + 'api/expense/';

  constructor(private httpClient: HttpClient) { }

  public lista(size: number): Observable<ExpenseContent> {
    return this.httpClient.get<ExpenseContent>(this.url + '?size=' + size);
  }

  public gastosPorAnno(size: number, year: number): Observable<ExpenseContent> {
    return this.httpClient.get<ExpenseContent>(this.url + 'year/' + year + '?size=' + size);
  }

  public gastosPorAnnoYMes(size: number, year: number, month: number): Observable<ExpenseContent> {
    return this.httpClient.get<ExpenseContent>(this.url + 'year/' + year + '/month/' + month + '?size=' + size);
  }

  public ingresosPorAnno(size: number, year: number): Observable<ExpenseContent> {
    return this.httpClient.get<ExpenseContent>(this.url + 'incomes/year/' + year + '?size=' + size);
  }

  public ingresosPorAnnoYMes(size: number, year: number, month: number): Observable<ExpenseContent> {
    return this.httpClient.get<ExpenseContent>(this.url + 'incomes/year/' + year + '/month/' + month + '?size=' + size);
  }

  public detalle(id: number): Observable<Expense> {  
    return this.httpClient.get<Expense>(this.url + id);
  }

  public nuevo(trainingcenter: Expense): Observable<any> {  
    return this.httpClient.post<any>(this.url, trainingcenter);
  }

  public actualizar(id: string, trainingcenter: Expense): Observable<any> {
    return this.httpClient.put<any>(this.url + id, trainingcenter);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.url + id);
  }

  public expensesPerYear(year: number): Observable<ExpenseSummary> {
    return this.httpClient.get<ExpenseSummary>(this.url + 'summary/year/' + year);
  }

  public expensesPerYearAndMonth(year: number, month: number): Observable<ExpenseSummary> {
    return this.httpClient.get<ExpenseSummary>(this.url + 'summary/year/' + year + '/month/' + month );
  }

}
