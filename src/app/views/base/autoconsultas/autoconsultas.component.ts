import { Component, NgModule } from '@angular/core';
import { AutoService} from '../servicios/auto.service';
import { AutoModel } from '../model/auto.model';
import { NgFor, NgIf } from '@angular/common';
import { data, error } from 'jquery';
import { FormsModule, NgModel } from '@angular/forms';
import { ModalComponent } from '@coreui/angular';


@Component({
  selector: 'app-autoconsultas',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf, ModalComponent],
  templateUrl: './autoconsultas.component.html',
  styleUrl: './autoconsultas.component.scss'
})

export class AutoconsultasComponent {
  autosVendidos: AutoModel[] = [];
  listaAutos : any[] = [];
  auto: AutoModel;
  /* marca: any; */
  marca: string = '';
  mostrarMensaje: boolean = false;
  constructor(private autoServicios : AutoService) {
    this.auto = new AutoModel;
  }

  ngOnInit(){
    this.getAutos();
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

  listarAutosPorMarca() {
    this.listaAutos.sort((a, b) => {
      if (a.marca < b.marca) return -1;
      if (a.marca > b.marca) return 1;
      return 0;
    });
  }

  ordenarAutosPorPrecio() {
    this.listaAutos.sort((a, b) => {
      if (a.precio > b.precio) return -1;
      if (a.precio < b.precio) return 1;
      return 0;
    });
    this.mostrarMensaje = true; // Mostrar el mensaje de éxito
    setTimeout(() => {
      this.mostrarMensaje = false; // Ocultar el mensaje después de 5 segundos
    }, 3000);
  }
  /* ordenarAutosPorPrecio() {
    this.listaAutos.sort((a, b) => {
      return b.precio.localeCompare(a.precio);
    });
  } */
  
  /* ordenarAutosPorPrecio() {
    // Copiamos la lista de autos para no modificar la original
    const autosOrdenados = [...this.listaAutos];  
    // Utilizamos reduce para ordenar los autos por precio de forma descendente
    const autosOrdenadosDescendente = autosOrdenados.reduce((acc, curr) => {
      // Insertamos el auto en la posición adecuada según su precio
      const index = acc.findIndex((auto: { precio: number; }) => auto.precio < curr.precio);
      if (index === -1) {
        // Si el auto tiene el precio más alto, lo colocamos al principio del arreglo
        return [curr, ...acc];
      } else {
        // Si el auto tiene un precio menor o igual que algún auto existente, lo insertamos en la posición correspondiente
        return [...acc.slice(0, index), curr, ...acc.slice(index)];
      }
    }, []);  
    // Actualizamos la lista de autos ordenada
    this.listaAutos = autosOrdenadosDescendente;
    // Mostrar el mensaje
    this.mostrarMensaje = true;

    // Ocultar el mensaje después de unos segundos
    setTimeout(() => {
      this.mostrarMensaje = false;
    }, 5000); // Ocultar después de 3 segundos (3000 milisegundos)
  } */
  /* ordenarAutosPorPrecio(): void {
    this.listaAutos.sort((a, b) => b.precio - a.precio); // Ordenar los autos por precio de mayor a menor
    this.mostrarMensaje = true; // Mostrar el mensaje de éxito
    setTimeout(() => {
      this.mostrarMensaje = false; // Ocultar el mensaje después de 5 segundos
    }, 5000);
  } */
  
  
}