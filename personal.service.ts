import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personal } from './personal';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  private baseUrl = 'http://localhost:8089/Transport_licence_system/personal';

  constructor(private http: HttpClient) { }

    getPersonal():Observable<Personal[]>{
      return this.http.get<Personal[]>(`${this.baseUrl}`);
    }
  getpersonal(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createpersonal(personal: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, personal);
  }
}
