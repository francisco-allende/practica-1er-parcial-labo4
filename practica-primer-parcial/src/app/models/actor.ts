import { Pelicula } from "./pelicula";
import { PaisModel } from "./pais";

export interface ActorModel{
    id:number;
    nombre:string,
    edad:number,
    pelicula:Pelicula,
    nacionalidad:PaisModel,
}