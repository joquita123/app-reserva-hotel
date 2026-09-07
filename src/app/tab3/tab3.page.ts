import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IAtor } from '../model/IAtor';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor(
    public router: Router,
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  listaAtores: IAtor[] = [
    {
      nome: 'Robert Downey Jr.',
      nascimento: '04/04/1965',
      nacionalidade: 'Estados Unidos',
      conhecidoPor: ['Homem de Ferro', 'Vingadores', 'Oppenheimer'],
      classificacao: 9,
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg',
      pagina: '/robert-downey-jr',
      favorito: false
    },
    {
      nome: 'Zendaya',
      nascimento: '01/09/1996',
      nacionalidade: 'Estados Unidos',
      conhecidoPor: ['Homem-Aranha', 'Duna', 'Euphoria'],
      classificacao: 8,
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3WdOloHpjtjL96uVOhFRRCcYSwq.jpg',
      pagina: '/zendaya',
      favorito: false
    },
    {
      nome: 'Jenna Ortega',
      nascimento: '27/09/2002',
      nacionalidade: 'Estados Unidos',
      conhecidoPor: ['Wandinha', 'Scream', 'Beetlejuice'],
      classificacao: 8,
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q1NRzyZQlYkxLY07GO9NVPkQnu8.jpg',
      pagina: '/jenna-ortega',
      favorito: false
    }
  ];

  exibirAtor(ator: IAtor) {
    const navigationExtras: NavigationExtras = { state: { paramAtor: ator } };
    this.router.navigate(['ator-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(ator: IAtor) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o ator?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            ator.favorito = false;
          }
        },
        {
          text: 'Sim, favoritar.',
          handler: () => {
            ator.favorito = true;
            this.apresentarToast('Ator adicionado aos favoritos...');
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
