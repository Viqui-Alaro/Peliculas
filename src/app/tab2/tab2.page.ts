import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  ideas: string[] = ['Spiderman', 'Avenger', 'El señor de los anillos', 'El aro', 'los PicaPiedras', 'Guardianes de la galaxia', 'X-Men', 'Bella y la Bestia', 'Cenicienta', 'Avatar', 'Parasitos']

  constructor() {}

  buscar( event ){
   const valor = event.detail.value;
   console.log(valor);
  }

}
