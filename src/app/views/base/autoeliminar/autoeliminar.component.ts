import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { AutoModel } from '../model/auto.model';
import { AutoService } from '../servicios/auto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-autoeliminar',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './autoeliminar.component.html',
  styleUrl: './autoeliminar.component.scss'
})
export class AutoeliminarComponent implements OnInit {
  auto: AutoModel;
  disponibilidadSeleccionada: string = ''; // Valor predeterminado para el select
  autosPorDisponibilidad: AutoModel[] = [];
  mensaje?: string;
  tablaVisible: boolean = false;
  /* listaAutosPorDisponibilidad: AutoModel[] = []; */

  constructor( private autoServicios : AutoService) {
    this.auto = new AutoModel;
    this.mensaje = '';
  }
 
  ngOnInit(): void {
    this.buscarAutosPorDisponibilidad();
  }
  buscarAutosPorDisponibilidad(): void {
    if (!this.disponibilidadSeleccionada) {
      this.mensaje = 'Por favor selecciona una disponibilidad.';
      return;
    }

    this.autoServicios.getAutosPorDisponibilidad(this.disponibilidadSeleccionada).subscribe(
      (data) => {
        this.autosPorDisponibilidad = data;
        this.mensaje = undefined; // Ocultar el mensaje de error
        //console.log('Autos por disponibilidad:', this.autosPorDisponibilidad);
      },
      error => {
        console.error('Error al obtener autos por disponibilidad:', error);
        this.mensaje = 'No se encontraron autos con la disponibilidad especificada';
        this.autosPorDisponibilidad = []; // Limpiar la lista en caso de error
      }
    );
  }
  
  eliminarAuto(auto: AutoModel): void {
    this.autoServicios.eliminarAuto(auto._id).subscribe(
      (data) => {
        this.mensaje = data.mensaje;
        this.autosPorDisponibilidad = this.autosPorDisponibilidad.filter(a => a._id !== auto._id); // Eliminar el auto de la lista
      },
      error => {
        console.error('Error al eliminar auto:', error);
      }
    );
  }

  resetearInput(): void {
    this.disponibilidadSeleccionada = '';
    this.tablaVisible = false;
    this.mensaje = undefined;
  }
}