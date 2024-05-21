import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../../models/pelicula';
import { PeliculasService } from '../../../services/peliculas.service';

@Component({
  selector: 'app-tabla-pelicula',
  standalone: true,
  imports: [],
  templateUrl: './tabla-pelicula.component.html',
  styleUrl: './tabla-pelicula.component.css'
})
export class TablaPeliculaComponent {
  @Input() peliculas:Pelicula[] = [];
  @Output() peliculaSeleccionadaEvent: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();

  constructor(public pelisService:PeliculasService){}

  ngOnInit():void{
  
  }

  seleccionarPelicula(peli:Pelicula){
    this.peliculaSeleccionadaEvent.emit(peli);
  }
}
