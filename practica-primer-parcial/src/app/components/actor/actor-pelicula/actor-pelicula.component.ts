import { Component, OnInit } from '@angular/core';
import { BienvenidoComponent } from '../../bienvenido/bienvenido.component';
import { PeliculaListadoComponent } from '../../pelicula/pelicula-listado/pelicula-listado.component';
import { ActorListadoComponent } from '../actor-listado/actor-listado.component';
import { DetalleActorComponent } from '../detalle-actor/detalle-actor.component';
import { ActorModel } from '../../../models/actor';
import { PeliculasService } from '../../../services/peliculas.service';
import { PaisesService } from '../../../services/paises.service';
import { Pelicula } from '../../../models/pelicula';
import { PaisModel } from '../../../models/pais';

@Component({
  selector: 'app-actor-pelicula',
  standalone: true,
  imports: [BienvenidoComponent, PeliculaListadoComponent, ActorListadoComponent, DetalleActorComponent],
  templateUrl: './actor-pelicula.component.html',
  styleUrl: './actor-pelicula.component.css'
})
export class ActorPeliculaComponent {
  
    pelis:Pelicula[] = []
    paises:PaisModel[] = [];
    actorSeleccionado:any;
  
    constructor(private apiPaises:PaisesService, private apiPelis:PeliculasService) {}

    ngOnInit(){
      this.apiPelis.getAllMovies().subscribe(data=>{
        this.pelis = data;
      })
      this.apiPaises.getCountries().subscribe(data=>{
        this.paises = data;
      })
    }


    handlerActorSeleccionado(actor:ActorModel){
      this.actorSeleccionado = actor;
      this.pelis.forEach((x=> {
        if(x.nombre == actor.pelicula.nombre){
          this.actorSeleccionado.pelicula = x;
        }
      }))
      this.paises.forEach((x=> {
        if(x.name == actor.nacionalidad.name){
          this.actorSeleccionado.nacionalidad = x;
        }
      }))

    }

}
