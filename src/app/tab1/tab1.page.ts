import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({ selector: 'app-tab1', templateUrl: 'tab1.page.html', styleUrls: ['tab1.page.scss'], standalone: false })
export class Tab1Page {
  diaria: number | null = null;
  dias = 1;
  constructor(private router: Router, private alertController: AlertController) {}

  async continuar() {
    if (!this.diaria || this.diaria <= 0) {
      const alerta = await this.alertController.create({ header: 'Atenção', message: 'Informe um valor de diária válido.', buttons: ['OK'] });
      await alerta.present();
      return;
    }
    this.router.navigate(['/detalhes'], { state: { diaria: Number(this.diaria), dias: Number(this.dias) } });
  }
}
