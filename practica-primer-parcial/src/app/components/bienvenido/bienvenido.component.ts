import { Component } from '@angular/core';
import { BusquedaComponent } from '../busqueda/busqueda.component';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [BusquedaComponent],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})
export class BienvenidoComponent {

}
