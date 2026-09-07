import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({ selector: 'app-detalhes', templateUrl: './detalhes.page.html', standalone: false })
export class DetalhesPage {
  diaria = 0; dias = 0;
  constructor(private router: Router) { const dados = this.router.getCurrentNavigation()?.extras.state || history.state; this.diaria = Number(dados.diaria) || 0; this.dias = Number(dados.dias) || 0; }
  get total(): number { return this.diaria * this.dias; }
  confirmar() { this.router.navigate(['/confirmacao'], { state: { diaria: this.diaria, dias: this.dias, total: this.total } }); }
}
