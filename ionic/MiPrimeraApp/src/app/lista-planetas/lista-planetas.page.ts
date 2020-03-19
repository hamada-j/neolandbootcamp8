import { PlanetasService } from './../planetas.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lista-planetas',
  templateUrl: './lista-planetas.page.html',
  styleUrls: ['./lista-planetas.page.scss'],
})
export class ListaPlanetasPage implements OnInit {

  arrPlanetas: any[];

  constructor(
    private planetasService: PlanetasService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Cargando los planetas...',
      duration: 2000
    });

    await loading.present();

    this.planetasService.getAll()
      .then(async response => {
        // await loading.dismiss();
        this.arrPlanetas = response['results'];
      })
  }

  async handleClick(planeta) {
    const alerta = await this.alertController.create({
      header: 'Información de Planeta',
      subHeader: planeta.name,
      message: `Población: ${planeta.population}. Clima: ${planeta.climate}`,
      buttons: ['cerrar']
    });
    await alerta.present();
  }

}
