import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaisModel } from '../../../models/pais';
import { PaisesService } from '../../../services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.css'
})
export class TablaPaisesComponent {
  paises:PaisModel[] = [];
  @Output() paisSeleccionadoEvent: EventEmitter<PaisModel> = new EventEmitter<PaisModel>();

  constructor(public apiPaises: PaisesService){}

  ngOnInit():void{
    this.apiPaises.getCountries().subscribe(data=>{
      this.paises = data;
    })
  }

  seleccionarPais(pais:PaisModel){
    this.paisSeleccionadoEvent.emit(pais);
  }

}
