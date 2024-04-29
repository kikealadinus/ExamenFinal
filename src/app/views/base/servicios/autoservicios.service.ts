/* import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoserviciosService {
  private apiURL = 'http://localhost:8000/ruta-auto'
  constructor(private http: HttpClient) { }

  getTodosAutos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }

  getOrdenarautosPorMarca(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL+'ordenar-auto');
  }

  getPorMarca(): Observable<any> {
    return this.http.get<any[]>(this.apiURL+'ruta-auto');
  }
  
  getOrdenarautosPorPrecio(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL+'ordenar-autos-precio');
  }


  getConsultarAutosPorDisponibilidad(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + '/autos-disponibilidad');
  }

} */