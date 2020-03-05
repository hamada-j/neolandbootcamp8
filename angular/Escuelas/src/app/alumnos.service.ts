import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/students';
  }

  getAll(): Promise<any> {
    return this.httpClient.get(this.baseUrl).toPromise();
  }

  getById(pAlumnoId): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${pAlumnoId}`).toPromise();
  }

  create(formValues): Promise<any> {
    return this.httpClient.post(this.baseUrl, formValues).toPromise()
  }

  delete(pAlumnoId): Promise<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        studentId: pAlumnoId
      }
    }
    return this.httpClient.delete(this.baseUrl, httpOptions).toPromise();
  }
}