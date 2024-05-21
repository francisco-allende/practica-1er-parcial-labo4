import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData , addDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActorModel } from '../models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(public firestore: Firestore) { }

  getAllActors(): Observable<any[]> {
    const col = collection(this.firestore, 'actores');
    return collectionData(col);
  }

  //olvidate del isIdentity, el id en si es el del firebase
  altaActor(actor:ActorModel | undefined){
    try{
      const col = collection(this.firestore, 'actores');
      addDoc(col, { id:actor?.id, nombre: actor?.nombre, edad:actor?.edad, pelicula:actor?.pelicula, nacionalidad: actor?.nacionalidad});
    }catch(error){
      console.error('Error en el alta actor:', error);
    }
  }
}
