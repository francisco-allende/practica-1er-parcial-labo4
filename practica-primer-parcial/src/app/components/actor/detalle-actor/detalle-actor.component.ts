import { Component, Input, OnInit } from '@angular/core';
import { ActorModel } from '../../../models/actor';

@Component({
  selector: 'app-detalle-actor',
  standalone: true,
  imports: [],
  templateUrl: './detalle-actor.component.html',
  styleUrl: './detalle-actor.component.css'
})
export class DetalleActorComponent {
  @Input() actorADetallar: ActorModel | undefined;

  getPelicula(){

  }

  getPais(){
    
  }
}
