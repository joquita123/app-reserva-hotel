import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ConfirmacaoPageRoutingModule } from './confirmacao-routing.module';
import { ConfirmacaoPage } from './confirmacao.page';
@NgModule({ imports: [CommonModule, IonicModule, ConfirmacaoPageRoutingModule], declarations: [ConfirmacaoPage] })
export class ConfirmacaoPageModule {}
