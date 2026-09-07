import { Component, OnInit } from '@angular/core';
import { IOrcamento } from '../model/IOrcamento';
@Component({ selector: 'app-orcamentos', templateUrl: './orcamentos.page.html', standalone: false })
export class OrcamentosPage implements OnInit {
  lista: IOrcamento[] = [];
  ngOnInit() { this.carregar(); }
  ionViewWillEnter() { this.carregar(); }
  carregar() { this.lista = JSON.parse(localStorage.getItem('orcamentos') || '[]'); }
  excluir(indice: number) { this.lista.splice(indice, 1); localStorage.setItem('orcamentos', JSON.stringify(this.lista)); }
}
