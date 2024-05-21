import { Component, Input, OnInit } from '@angular/core';
import { ActoresService } from '../../../services/actores.service';
import { ActorModel } from '../../../models/actor';
import { ToastrService } from 'ngx-toastr';
import { TablaPaisesComponent } from '../tabla-paises/tabla-paises.component';
import { PaisModel } from '../../../models/pais';
import { BienvenidoComponent } from '../../bienvenido/bienvenido.component';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-actor-alta',
  standalone: true,
  imports: [TablaPaisesComponent, BienvenidoComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './actor-alta.component.html',
  styleUrl: './actor-alta.component.css'
})
export class ActorAltaComponent {
  actor:ActorModel | undefined;
  paisSeleccionado: PaisModel | undefined;
  actorForm!: FormGroup;

  constructor(public actoresService: ActoresService, 
              private toast: ToastrService,
              private fb: FormBuilder){
                this.actorForm = this.fb.group({
                  nombre: ['', Validators.required],
                  edad: ['', Validators.required],
                  pelicula: ['', Validators.required],
                  nacionalidad: ['', Validators.required]
                })
                }
  
  ngOnInit():void{
  
  }
  
  handlerPaisSeleccionado(pais: any) {
    this.actorForm.get('nacionalidad')?.setValue(pais.name);
  }

  saveActor() {
    if (this.actorForm.valid) {
      if(this.createActor()){
        try{
          this.actoresService.altaActor(this.actor);
          this.toast.success(`Actor ${this.actor?.nombre} cargado con exito`)
        }catch(error){
          console.log("no pudo cargarse el actor  ",  error);
        }
      }
    }else{
      this.toast.error("Campos incompletos")
    }
  }

  createActor():boolean{

    const { nombre, edad, pelicula, nacionalidad } = this.actorForm.value;

    const actorObj: ActorModel = {
      id: 0,
      nombre: nombre,
      edad: edad,
      pelicula: pelicula,
      nacionalidad: nacionalidad
    };

    this.actor = actorObj;

    return this.actor?.nombre && this.actor.edad && this.actor.pelicula && this.actor.nacionalidad ? true : false;
  }
  
  
}
