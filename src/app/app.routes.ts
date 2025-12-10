import { Routes } from '@angular/router';
import { RickAndMortyListJm } from '@app/components/rick-and-morty-list-jm/rick-and-morty-list-jm';
import {RickAndMortyDetailJm } from '@app/components/rick-and-morty-detail-jm/rick-and-morty-detail-jm';
import {SimpsonsListJm } from '@app/components/simpsons-list-jm/simpsons-list-jm';
import {SimpsonsDetailJm } from '@app/components/simpsons-detail-jm/simpsons-detail-jm';
import {DragonballListJm } from '@app/components/dragonball-list-jm/dragonball-list-jm';
import {DragonballDetailJm } from '@app/components/dragonball-detail-jm/dragonball-detail-jm';

export const routes: Routes = [
  { path: '', redirectTo: '/rick', pathMatch: 'full' },
  { path: 'rick', component: RickAndMortyListJm },
  { path: 'rick/:id', component: RickAndMortyDetailJm },

  { path: 'simpsons', component: SimpsonsListJm },
  { path: 'simpsons/:id', component: SimpsonsDetailJm },

  { path: 'dragonball', component: DragonballListJm },
  { path: 'dragonball/:id', component: DragonballDetailJm},

  { path: '**', redirectTo: '/rick' }
];
