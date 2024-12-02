import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  private apiUrl = 'http://127.0.0.1:8000/api/space'; // Reemplaza con tu URL de API

  constructor(private http: HttpClient) { }

  // Método GET
  getData(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Método POST
  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl, data, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // Método PUT
  updateData(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Método DELETE
  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Manejo de errores
  private handleError(error: any): Observable<never> {
    console.error('Error en la petición:', error);
    throw error;
  }
}
