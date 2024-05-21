import { Component } from '@angular/core';
import { BienvenidoComponent } from '../../bienvenido/bienvenido.component';
import { ActorListadoComponent } from '../../actor/actor-listado/actor-listado.component';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Pelicula } from '../../../models/pelicula';
import { PeliculasService } from '../../../services/peliculas.service';
import { ToastrService } from 'ngx-toastr';
import { ActorModel } from '../../../models/actor';


@Component({
  selector: 'app-pelicula-alta',
  standalone: true,
  imports: [BienvenidoComponent, ActorListadoComponent, FormsModule, ReactiveFormsModule ],
  templateUrl: './pelicula-alta.component.html',
  styleUrl: './pelicula-alta.component.css'
})
export class PeliculaAltaComponent {

  peliculaForm!: FormGroup;
  pelicula:Pelicula | undefined;
  actor:ActorModel | undefined;

  constructor(private fb: FormBuilder , private toast: ToastrService, private pelisService: PeliculasService) 
  {
    this.peliculaForm = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      cantidadPublico: ['', Validators.required],
      fechaEstreno: ['', Validators.required],
      fotoPelicula:  ['', Validators.required],
      actorPelicula:  ['', Validators.required],
    })
  }

  savePelicula(){
    if (this.peliculaForm.valid) {
      if(this.createPeli()){
        try{
          this.pelisService.altaPelicula(this.pelicula);
          this.toast.success(`Actor ${this.pelicula?.nombre} cargado con exito`)
        }catch(error){
          console.log("no pudo cargarse la peli  ",  error);
        }
      }
    }else{
      this.toast.error("Campos incompletos")
    }
  }

  handlerActorSeleccionado(actor:ActorModel){
    this.peliculaForm.get('actorPelicula')?.setValue(actor.nombre);
  }

  createPeli():boolean{

    const { nombre, tipo, cantidadPublico, fechaEstreno, fotoPelicula, actorPelicula } = this.peliculaForm.value;

    const peliObj: Pelicula = {
      id: 0,
      nombre: nombre,
      tipo: tipo,
      cantidadPublico: cantidadPublico,
      fechaEstreno: fechaEstreno,
      fotoPelicula: fotoPelicula,
      actorPelicula: actorPelicula
    };

    this.pelicula = peliObj;

    return this.pelicula?.nombre && this.pelicula.cantidadPublico && this.pelicula.fechaEstreno && this.pelicula.fotoPelicula ? true : false;
  }
}
