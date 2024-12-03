import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Space } from '../../../core/interfaces/space.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  private apiUrl = environment.ApiUrl+'/space'; 

  constructor(private http: HttpClient) { }


  getData(): Observable<Space[]> {
    return this.http.get<Space[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getDataById(id:number): Observable<Space> {
    return this.http.get<Space>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  postData(formData: FormData): Observable<Space> {
    return this.http.post<Space>(this.apiUrl, formData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('Error:', error);
    throw error;
  }
}
