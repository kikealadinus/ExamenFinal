import { CurrencyPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AutoService } from '../servicios/auto.service';
import {
  ButtonCloseDirective,
  ButtonDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ThemeDirective,
} from '@coreui/angular';

@Component({
  selector: 'app-autoprecioventa',
  standalone: true,
  imports: [
    NgFor,
    CurrencyPipe,
    ButtonDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ThemeDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalFooterComponent,
  ],
  templateUrl: './autoprecioventa.component.html',
  styleUrl: './autoprecioventa.component.scss',
})
export class AutoprecioventaComponent implements OnInit {
  listaAutos : any[] = [];
  public visible = false;
  cantidadAutosVendidos: number = 0;

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  autosVendidos: any[] = [];
  totalPrecioVenta: number = 0;
  error: string | undefined;
  sumaTotal: number = 0;

  constructor(private autoServicios: AutoService) {}

  ngOnInit(): void {
    
  }
  calcularPrecioVenta(): void {
    this.autoServicios.getTodosAutos().subscribe(
      (data) => {
        this.listaAutos = data;
      }
    );
    this.visible = !this.visible;
    if (this.visible) {
      this.calcularSumaTotal();
    }
  }
  calcularSumaTotal() {
    this.autoServicios.getSumaPrecioVenta().subscribe(
      (data) => {
        this.totalPrecioVenta = data.totalPrecioVenta;
        // Ahora, también contamos la cantidad de autos vendidos
        this.autoServicios.getTodosAutos().subscribe(
          (autos) => {
            this.autosVendidos = autos.filter(auto => auto.disponibilidad === 'Vendido');
            // Actualizamos el contador de autos vendidos
            this.cantidadAutosVendidos = this.autosVendidos.length;
          },
          (error) => {
            console.error('Error al obtener la lista de autos:', error);
          }
        );
      },
      (error) => {
        console.error('Error al obtener la suma total del precio de venta:', error);
      }
    );
  }
  

  /* calcularSumaTotal() {
    this.autoServicios.getSumaPrecioVenta().subscribe(
      (data) => {
        this.totalPrecioVenta = data.totalPrecioVenta;
      },
      (error) => {
        console.error(
          'Error al obtener la suma total del precio de venta:',
          error
        );
      }
    );    
  } */

}