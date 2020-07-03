import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas: PeliculaDetalle[] = [];

  constructor( private storage: Storage) { }

  guardarPelicula( pelicula: PeliculaDetalle){
    let existe = false;
    let mensaje = '';

    for (const peli of this.peliculas){
      if (peli.id === pelicula.id){
        existe = true;
        break;
      }
    }

    if (existe){
      this.peliculas = this.peliculas.filter( peli => peli.id !== pelicula.id);
      mensaje = 'Removido de favoritos';
    }else{
      this.peliculas.push( pelicula );
      mensaje = 'Agregado a favoritos';
    }
    
    this.storage.set('peliculas' , this.peliculas );
  }


}
