import { Component } from '@angular/core';
import { TablaPeliculaComponent } from '../pelicula/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from '../pelicula/detalle-pelicula/detalle-pelicula.component';
import { Pelicula } from '../../models/pelicula';
import { ActorListadoComponent } from '../actor/actor-listado/actor-listado.component';
import { ActorAltaComponent } from '../actor/actor-alta/actor-alta.component';
import { ActorModel } from '../../models/actor';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  peliculaSeleccionada: Pelicula | undefined;
  actorSeleccionado: ActorModel | undefined;

  constructor(public ruter: Router){}

  actualizarDetallePelicula(e:any) {
    this.peliculaSeleccionada = e;
  }
  showAltaActor(actor:ActorModel){
    this.actorSeleccionado = actor;
  }
}
