import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(public firestore: Firestore) { }

  getAllMovies(): Observable<any[]> {
    const col = collection(this.firestore, 'peliculas');
    return collectionData(col);
  }

  altaPelicula(pelicula: Pelicula | undefined){
    try{
      const col = collection(this.firestore, 'peliculas');
      addDoc(col, { 
        id:pelicula?.id, 
        nombre: pelicula?.nombre, 
        tipo: pelicula?.tipo,
        cantidadPublico: pelicula?.cantidadPublico, 
        fechaEstreno: pelicula?.fechaEstreno, 
        fotoPelicula: pelicula?.fotoPelicula,
        actorPelicula: pelicula?.actorPelicula
      });
    }catch(error){
      console.error('Error en el alta actor:', error);
    }
  }

}
