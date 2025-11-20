import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl; // Set in environment.ts

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    // Basic headers for JSON requests
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept-Language': 'en',
    });
  }

  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${endpoint}`, { params, headers: this.getHeaders() });
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    // remove extra slash if you already have trailing slash in apiUrl
    const url = `${this.baseUrl}${endpoint.startsWith('/') ? endpoint.substring(1) : endpoint}`;
    return this.http.post<T>(url, body); // Angular will send JSON automatically
  }

  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${endpoint}`, body, { headers: this.getHeaders() });
  }

  delete<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}${endpoint}`, { params, headers: this.getHeaders() });
  }
}
