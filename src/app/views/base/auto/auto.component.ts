import { Component } from '@angular/core';
import { AutoService} from '../servicios/auto.service';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, ListGroupDirective, ListGroupItemDirective, RowComponent } from '@coreui/angular';
import { NgFor } from '@angular/common';
import { FormsModule, Validators } from '@angular/forms';
import { AutoModel } from '../model/auto.model';

@Component({
  selector: 'app-auto',
  standalone: true,
  imports: [ListGroupDirective, ListGroupItemDirective, 
              ButtonDirective, NgFor,
              RowComponent, ColComponent, CardComponent,
              CardHeaderComponent, CardBodyComponent,
              FormsModule, FormDirective, FormLabelDirective, FormControlDirective,
                            
          ],
  templateUrl: './auto.component.html',
  styleUrl: './auto.component.scss'
})
export class AutoComponent {
  listaAutos : any[] = [];
  auto: AutoModel
  autoForm: any;
  fb: any;

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

  /* getAutosPorPrioridad(){
    this.autoServicios.getOrdenarautosPorPrioridad().subscribe(
      (data) => {
        this.listaAutos = data;
        console.log(this.listaAutos);
      },
      (error) => console.log(error)
    );
  } */

  // Función para ordenar los autos por marca alfabéticamente
  /* getordenarPorMarca() {
    this.listaAutos.sort((a, b) => {
      if (a.marca < b.marca) return -1;
      if (a.marca > b.marca) return 1;
      return 0;
    });
  } */

  getordenarPorPrioridad() {
    this.listaAutos.sort((a, b) => {
      if (a.prioridad < b.prioridad) return -1;
      if (a.prioridad > b.prioridad) return 1;
      return 0;
    });
  }

  // funcion agregar
  agregarAuto() {
    console.log(this.auto);
    if (!this.auto._id) {
      // Agregar un nuevo auto
      this.autoServicios.agregarAuto(this.auto).subscribe(
        (data: AutoModel) => {
          console.log("Auto agregado:", data);
          // Actualizar la lista de autos después de agregar uno nuevo
          this.getAutos();
          // Limpiar el formulario después de agregar el auto
          this.auto = new AutoModel();
        },
        (error) => console.log(error)
      );
    } else {
      // Editar un auto existente
      this.autoServicios.editarAuto(this.auto._id, this.auto).subscribe(
        (data: AutoModel) => {
          console.log("Auto editado:", data);
          // Actualizar la lista de autos después de editar uno existente
          this.getAutos();
          // Limpiar el formulario después de editar el auto
          this.auto = new AutoModel();
        },
        (error) => console.log(error)
      );
    }
  }
  
  /* agregarAuto(){
    console.log(this.auto);
    if (this.auto._id == null || this.auto._id == '') {
      // agregar
      this.autoServicios.agregarAuto(this.auto).subscribe(
        (data: AutoModel) => {
          console.log("Auto agregado:", data);
          this.getAutos();
        },
        (error) => console.log(error)
      );
    } 
    else {
      this.autoServicios.editarAuto(this.auto._id, this.auto).subscribe(
        (data: AutoModel) => {
          console.log("Auto editado:", data);
          this.getAutos();
        },
        (error) => console.log(error)
      );
    }    
  } */

  // Función para editar un elemento de la lista
  editarAuto(item: AutoModel) {    
    console.log(item);
    this.auto = item;
  }

  // Función para eliminar un elemento de la lista
  eliminarAuto(item : AutoModel) {    
    this.autoServicios.eliminarAuto(item._id).subscribe(
      (data: AutoModel) => {
        console.log("Auto eliminado:", data);
        this.getAutos();
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

}