import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ISerie } from '../model/ISerie';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(
    public router: Router,
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  listaSeries: ISerie[] = [
    {
      nome: 'Stranger Things',
      lancamento: '15/07/2016',
      temporadas: '4 temporadas',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
      generos: ['Drama', 'Misterio', 'Sci-Fi'],
      pagina: '/stranger-things',
      favorito: false
    },
    {
      nome: 'The Last of Us',
      lancamento: '15/01/2023',
      temporadas: '2 temporadas',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
      generos: ['Drama', 'Acao', 'Aventura'],
      pagina: '/the-last-of-us',
      favorito: false
    },
    {
      nome: 'Wandinha',
      lancamento: '23/11/2022',
      temporadas: '1 temporada',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9PFonBhy4cQy7Jz20NpMygczOkv.jpg',
      generos: ['Comedia', 'Misterio', 'Fantasia'],
      pagina: '/wandinha',
      favorito: false
    }
  ];

  exibirSerie(serie: ISerie) {
    const navigationExtras: NavigationExtras = { state: { paramSerie: serie } };
    this.router.navigate(['serie-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(serie: ISerie) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a serie?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            serie.favorito = false;
          }
        },
        {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito = true;
            this.apresentarToast('Serie adicionada aos favoritos...');
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
