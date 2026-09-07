import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OrcamentosPageRoutingModule } from './orcamentos-routing.module';
import { OrcamentosPage } from './orcamentos.page';
@NgModule({ imports: [CommonModule, IonicModule, OrcamentosPageRoutingModule], declarations: [OrcamentosPage] })
export class OrcamentosPageModule {}
