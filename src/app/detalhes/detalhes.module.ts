import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DetalhesPageRoutingModule } from './detalhes-routing.module';
import { DetalhesPage } from './detalhes.page';
@NgModule({ imports: [CommonModule, IonicModule, DetalhesPageRoutingModule], declarations: [DetalhesPage] })
export class DetalhesPageModule {}
