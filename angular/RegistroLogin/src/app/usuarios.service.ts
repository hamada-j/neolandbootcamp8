import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://registrate.ngrok.io';
  }

  pedirPremio(): Promise<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'user-token': '¿sXKPCw7kjOq2EsZoB98'
      })
    };
    return this.httpClient.get<any>(`${this.baseUrl}/premio`, httpOptions).toPromise();
  }

  registro(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/register`, formValues).toPromise();
  }

  login(formValues): Promise<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/login`, formValues).toPromise();
  }

}
