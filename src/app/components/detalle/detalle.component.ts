import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];
  oculto = 150;
  estrella = 'star-outline';

  slideOptActores = {
    slidesPerView: 3.3,
    freMode: true,
    spacebetween: -5
  };

  constructor(public alertController: AlertController, private moviesService: MoviesService,
              private modalCtrl: ModalController,
              private dataLocal: DataLocalService) { }

   ngOnInit() {
    // console.log('ID', this.id);

   this.dataLocal.existePelicula(this.id)
   .then(existe => this.estrella = (existe) ? 'star' : 'star-outline' );

   this.moviesService.getPeliculaDetalle( this.id )
    .subscribe(resp => {
    //  console.log(resp);
      this.pelicula = resp;
    });

   this.moviesService.getActoresPelicula( this.id )
    .subscribe(resp => {
      //console.log(resp);
      this.actores = resp.cast;
    });
  }

  regresar(){
    this.modalCtrl.dismiss();
  }

  favorito(){
    const existe = this.dataLocal.guardarPelicula(this.pelicula);
    this.estrella = (existe) ? 'star' : 'star-outline' ;

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: this.id,
      buttons: ['OK']
    });

    await alert.present();
  }

}
