import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AutoService } from '../servicios/auto.service';
import { AutoModel } from '../model/auto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-autodisponibilidad',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './autodisponibilidad.component.html',
  styleUrl: './autodisponibilidad.component.scss'
})
export class AutodisponibilidadComponent implements OnInit {
  listaAutos: AutoModel[] = [];
  auto: AutoModel;
  listaAutosPorDisponibilidad: AutoModel[] = [];
  disponibilidadBuscada: string = '';
  disponibilidadEncontrada: boolean = true;  
  tablaVisible: boolean = false;

  constructor( private autoServicios : AutoService) {
    this.auto = new AutoModel;
  }

  ngOnInit(){
    this.getAutos();

  }
  getAutos() {
    this.autoServicios.getTodosAutos().subscribe(
      (auto) => {
        this.listaAutosPorDisponibilidad = auto;
        console.log(this.listaAutosPorDisponibilidad);
      },
      (error) => console.log(error)
    );
  }

  buscarAutosPorDisponiblidad(): void {
    this.autoServicios.getAutosPorDisponibilidad(this.disponibilidadBuscada).subscribe(
      (auto) => {
        this.listaAutosPorDisponibilidad = auto;
        if(this.listaAutosPorDisponibilidad.length === 0)  {
          alert("No hay autos con la DISPNIBLIDAD buscada");
          this.listaAutosPorDisponibilidad = [];
          this.disponibilidadEncontrada = false;
        } else {
          this.tablaVisible = true;
        }
        this.disponibilidadEncontrada = true;
      }, 
      error => {
        console.log('Error al obtener autos por Disponibilidad:', error);
        alert('No hay autos con la DISPNIBLIDAD buscada.');
        this.disponibilidadEncontrada = true;
      }
    );
  }

  resetearInput(): void {
    this.disponibilidadBuscada = '';
    this.disponibilidadEncontrada = true;      
  }

}