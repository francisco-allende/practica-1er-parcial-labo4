import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../../models/pelicula';
import { PeliculasService } from '../../../services/peliculas.service';
import { TablaPeliculaComponent } from '../tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from '../detalle-pelicula/detalle-pelicula.component';
import { BienvenidoComponent } from '../../bienvenido/bienvenido.component';

@Component({
  selector: 'app-pelicula-listado',
  standalone: true,
  imports: [TablaPeliculaComponent, DetallePeliculaComponent, BienvenidoComponent],
  templateUrl: './pelicula-listado.component.html',
  styleUrl: './pelicula-listado.component.css'
})
export class PeliculaListadoComponent {
    arrPeliculas: Pelicula[] = [];
    peliculaSeleccionada: Pelicula | undefined;

    constructor(private peliculaService: PeliculasService) {}

    ngOnInit() {
      this.peliculaService.getAllMovies().subscribe(data => {
        this.arrPeliculas = data;
      });
    }

    handlerPeliculaSeleccionada(pelicula: Pelicula) {
      this.peliculaSeleccionada = pelicula;
  }
}
