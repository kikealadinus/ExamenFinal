import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutoModel } from '../model/auto.model';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  getAutosVendidos() {
    throw new Error('Method not implemented.');
  }
  consultarAutosPorDisponibilidad(disponibilidad: any) {
    throw new Error('Method not implemented.');
  }
  /* getPorMarca(est: any) {
    throw new Error('Method not implemented.');
  } */
  private apiURL = 'http://localhost:8000/ruta-auto'
  constructor(private http: HttpClient) { }

  getTodosAutos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }

  getOrdenarautosPorPrioridad(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL+'ordenar-auto');
  }  

  /* ---- METODO CRUD ----- */
  agregarAuto(auto: AutoModel): Observable<AutoModel> {
    return this.http.post<AutoModel>(`${this.apiURL}/agregar`,auto);
    /* return this.http.post<AutoModel>(this.apiURL+'agregar',auto); */
  }
  /* FUNCIÓN EDITAR */
  editarAuto(id: string, auto: AutoModel): Observable<AutoModel> {
    return this.http.put<AutoModel>(`${this.apiURL}/editar/${id}`,auto);
  }
  /* FUNCIÓN ELIMINAR */
  eliminarAuto(id: string): Observable<AutoModel> {
    console.log(id);
    console.log(`${this.apiURL}/eliminar/${id}`);
    return this.http.delete<AutoModel>(`${this.apiURL}/eliminar/${id}`);
  }

  /* ---- BUSCAR AUTOS POR MARCA ---- */
  getAutosPorMarca(marca: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiURL}/autos-marca/${marca}`);
  }

  /* ---- BUSCAR AUTOS POR DISPONIBILIDAD ---- */
  getAutosPorDisponibilidad(disponibilidad: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiURL}/autos-disponibilidad/${disponibilidad}`);
  }

  /* ---- ELIMINAR AUTOS POR DISPONIBILIDAD ---- */
  /* eliminarAutoPorDisponibilidad(disponibilidad: string): Observable<AutoModel> {
    return this.http.delete<AutoModel>(`${this.apiURL}/eliminar-disponibilidad/${disponibilidad}`);
  } */

  eliminarAutosPorDisponibilidad(estado: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/eliminar-disponibilidad/${estado}`);
  }

  /* ----- SUMA TOTALDE LOS AUTOS VENDIDOS ----- */
  getSumaPrecioVenta(): Observable<{ totalPrecioVenta: number }> {
    return this.http.get<{ totalPrecioVenta: number }>(`${this.apiURL}/suma-precioventa`);
  }

}