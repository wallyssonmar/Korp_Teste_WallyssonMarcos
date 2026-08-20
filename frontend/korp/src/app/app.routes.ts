import { Routes } from '@angular/router';
import { TelaEstoque } from './components/tela-estoque/tela-estoque';
import { TelaNotaFiscal } from './components/tela-nota-fiscal/tela-nota-fiscal';

export const routes: Routes = [
  { path: '', component: TelaEstoque },
  { path: 'estoque', component: TelaEstoque },
  { path: 'nota-fiscal', component: TelaNotaFiscal },
];
