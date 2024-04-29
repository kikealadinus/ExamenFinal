import { NgFor, NgIf } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { AutoModel } from '../model/auto.model';
import { AutoService } from '../servicios/auto.service';
import { FormsModule, NgModel } from '@angular/forms';
/* import { ActivatedRoute } from '@angular/router';
import { data, error } from 'jquery'; */

@Component({
  selector: 'app-automarca',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './automarca.component.html',
  styleUrl: './automarca.component.scss'
})
export class AutomarcaComponent implements OnInit {
  listaAutos: AutoModel[] = [];
  auto: AutoModel;
  marcaBuscada: string = '';
  mensaje: string = '';
  listaAutosPorMarca: AutoModel[] = [];
  marcaEncontrada: boolean = false;
  autosEncontrados: AutoModel[] = [];
  tablaVisible: boolean = false;

  constructor( private autoServicios : AutoService) {
    this.auto = new AutoModel;
    /* this.marcaBuscada = 'marca';
    this.mensaje = ''; */
  }

  ngOnInit(){
    this.getAutos();

    /* this.route.params.subscribe(params => {
      this.marcaBuscada = params['marca'];
      this.buscarAutosPorMarca();
    }); */
  }
  getAutos(){
    this.autoServicios.getTodosAutos().subscribe(
      (data) => {
        this.listaAutos = data;
        console.log(this.listaAutos);
      },
      (error) => console.log(error)
    );
  }
  
  /* buscarAutosPorMarca(): void {
    this.autoServicios.getAutosPorMarca(this.marcaBuscada).subscribe(
      (data) => {
        this.listaAutosPorMarca = data;
        this.marcaEncontrada = true;
        console.log('Autos por marca:', this.listaAutosPorMarca);
      },
      error => {
        console.error('Error al obtener autos por marca:' , error);
        this.marcaEncontrada = true;
      }
    );
  } */
  buscarAutosPorMarca(): void {
    this.autoServicios.getAutosPorMarca(this.marcaBuscada).subscribe(
      (data) => {
        this.listaAutosPorMarca = data;
        if (this.listaAutosPorMarca.length === 0) {
          alert('No se encontraron autos para la marca buscada.');
          this.listaAutosPorMarca = []; // Restablecer la lista de autos por marca
          this.tablaVisible = false; // Ocultar la tabla
        } else {
          this.tablaVisible = true; // Mostrar tabla
        }
        this.marcaEncontrada = true;
        console.log('Autos por marca:', this.listaAutosPorMarca);
      },
      error => {
        console.log('Error al obtener autos por marca:', error);
        alert('Se produjo un error al buscar autos por marca. Inténta buscar otra marca.');
        this.marcaEncontrada = true;
      }
    );
  }

  resetearInput(): void {
    this.marcaBuscada = '';
    this.marcaEncontrada = true;
    this.autosEncontrados = [];
  }
  

}