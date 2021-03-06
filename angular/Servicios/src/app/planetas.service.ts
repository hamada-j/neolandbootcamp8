import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://swapi.co/api/planets/?format=json';
  }

  getAll(pPage = 1): Promise<any> {
    return this.httpClient.get<any>(`${this.baseUrl}&page=${pPage}`).toPromise();
  }

  getNames() {
    return new Promise((resolve, reject) => {
      this.getAll()
        .then(response => {
          let arrNuevo = response.results.map(planet => planet.name)
          return arrNuevo;
        })
        .then(arrNombres => {
          resolve(arrNombres);
        });
    })
  }

  pintarArray(arrNombres) {
    console.log(arrNombres);
  }

  extractNames(response) {
    let arrNuevo = response.results.map(planet => planet.name)
    return arrNuevo;
  }

  getRandomNum(): Promise<any> {
    const body = {
      max: 34,
      min: 2
    }
    return this.httpClient.post<any>('https://random.ngrok.io/random/num', body).toPromise();
  }

}









