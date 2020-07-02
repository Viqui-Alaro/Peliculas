import { Component } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  buscando = false;
  peliculas: Pelicula[] = [];
  ideas: string[] = ['Spiderman', 'Avenger', 'El señor de los anillos', 'El aro', 'los PicaPiedras', 'Guardianes de la galaxia', 'X-Men', 'Bella y la Bestia', 'Cenicienta', 'Avatar', 'Parasitos']

  constructor( private moviesService: MoviesService) {}

  buscar( event ){
   const valor = event.detail.value;

   if ( valor.length ==0 ){
      this.buscando = false;
      this.peliculas = [];
      return;
    }
   //console.log(valor);
   this.buscando = true;
   this.moviesService.buscarPeliculas( valor )
        .subscribe( resp => {
          console.log( resp );
          this.peliculas = resp['results'];
          this.buscando = false;
        });

  }

}
