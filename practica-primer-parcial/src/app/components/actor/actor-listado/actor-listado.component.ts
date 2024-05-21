import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActoresService } from '../../../services/actores.service';
import { ActorModel } from '../../../models/actor';
import { Pelicula } from '../../../models/pelicula';

@Component({
  selector: 'app-actor-listado',
  standalone: true,
  imports: [],
  templateUrl: './actor-listado.component.html',
  styleUrl: './actor-listado.component.css'
})
export class ActorListadoComponent {
  actores:ActorModel[] = [];
  actor:ActorModel | undefined;
  @Output() actorSeleccionadoEvent: EventEmitter<ActorModel> = new EventEmitter<ActorModel>();

  constructor(public actoresService: ActoresService){}
  
  ngOnInit():void{
    this.actoresService.getAllActors().subscribe(data=>{
      this.actores = data;
    })
  }

  seleccionarActor(actor:ActorModel){
    this.actorSeleccionadoEvent.emit(actor);
  }

}
