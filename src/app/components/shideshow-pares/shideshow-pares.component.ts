import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
  selector: 'app-shideshow-pares',
  templateUrl: './shideshow-pares.component.html',
  styleUrls: ['./shideshow-pares.component.scss'],
})
export class ShideshowParesComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  };
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onClick(){
    this.cargarMas.emit();
  }

  async verDetalle(id: string){

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.present();

  }

}
