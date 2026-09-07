import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IOrcamento } from '../model/IOrcamento';
@Component({ selector: 'app-confirmacao', templateUrl: './confirmacao.page.html', standalone: false })
export class ConfirmacaoPage {
  total = 0;
  constructor(private router: Router) {
    const dados = this.router.getCurrentNavigation()?.extras.state || history.state;
    const orcamento: IOrcamento = { diaria: Number(dados.diaria), dias: Number(dados.dias), total: Number(dados.total), data: new Date().toLocaleString('pt-BR') };
    this.total = orcamento.total;
    const lista: IOrcamento[] = JSON.parse(localStorage.getItem('orcamentos') || '[]');
    lista.push(orcamento);
    localStorage.setItem('orcamentos', JSON.stringify(lista));
  }
}
