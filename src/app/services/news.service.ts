import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { News } from '../models/news';
import { NewsContent } from '../models/newsContent';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsUrl = environment.apiUrl + 'api/news/';


  constructor(private httpClient: HttpClient) { }

  public lista(page: number): Observable<NewsContent> {
    return this.httpClient.get<NewsContent>(this.newsUrl + '?page=' + page);
  }

  public detalle(id: number): Observable<News> {  
    return this.httpClient.get<News>(this.newsUrl + id);
  }

  public nuevo(news: News): Observable<any> {  
    return this.httpClient.post<any>(this.newsUrl, news);
  }

  public actualizar(id: string, news: News): Observable<any> {
    return this.httpClient.put<any>(this.newsUrl + id, news);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.newsUrl + id);
  }
}
