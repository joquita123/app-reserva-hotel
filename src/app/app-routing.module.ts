import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'detalhes', loadChildren: () => import('./detalhes/detalhes.module').then(m => m.DetalhesPageModule) },
  { path: 'confirmacao', loadChildren: () => import('./confirmacao/confirmacao.module').then(m => m.ConfirmacaoPageModule) },
  { path: 'orcamentos', loadChildren: () => import('./orcamentos/orcamentos.module').then(m => m.OrcamentosPageModule) },
  { path: '', loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule) }
];

@NgModule({ imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })], exports: [RouterModule] })
export class AppRoutingModule {}
