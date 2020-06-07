import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-shideshow-pares',
  templateUrl: './shideshow-pares.component.html',
  styleUrls: ['./shideshow-pares.component.scss'],
})
export class ShideshowParesComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true
  };
  constructor() { }

  ngOnInit() {}

}
