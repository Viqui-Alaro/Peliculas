import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle } from '../../interfaces/interfaces';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  pelicula: PeliculaDetalle = {};
  oculto = 150;
  constructor(public alertController: AlertController, private moviesService: MoviesService) { }

  ngOnInit() {
    // console.log('ID', this.id);
   this.moviesService.getPeliculaDetalle( this.id )
    .subscribe(resp => {
      console.log(resp);
      this.pelicula = resp;
    });

   this.moviesService.getActoresPelicula( this.id )
    .subscribe(resp => {
      console.log(resp);
    });
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