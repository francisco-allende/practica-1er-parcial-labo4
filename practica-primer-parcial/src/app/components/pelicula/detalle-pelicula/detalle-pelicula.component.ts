import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../../models/pelicula';
import { ActorListadoComponent } from '../../actor/actor-listado/actor-listado.component';
import { ActorModel } from '../../../models/actor';

@Component({
  selector: 'app-detalle-pelicula',
  standalone: true,
  imports: [ActorListadoComponent],
  templateUrl: './detalle-pelicula.component.html',
  styleUrl: './detalle-pelicula.component.css'
})
export class DetallePeliculaComponent {
  @Input() peliculaADetallar:Pelicula | undefined;
   
  
  
}
