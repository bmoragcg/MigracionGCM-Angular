import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const urlApi = environment.urlApi + '';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor(private http: HttpClient) {}

  public post<T>(query: string, param: any): Observable<T> {
    query = urlApi + query;
    return this.http.post<T>(query, param);
  }

  public get<T>(query: string): Observable<T> {
    query = urlApi + query;
    return this.http.get<T>(query);
  }

  public put<T>(query: string, params: any): Observable<T> {
    query = urlApi + query;
    return this.http.put<T>(query, params);
  }
}
