import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { RickAndMortyApiService } from '../../services/rickandmorty/rick-and-morty-api';

@Component({
  selector: 'app-rick-and-morty-list_jm',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rick-and-morty-list-jm.html',
  styleUrls: ['./rick-and-morty-list-jm.scss']
})
export class RickAndMortyListJm implements OnInit {
  characters: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private api: RickAndMortyApiService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this.error = null;
    this.api.getCharacters(1).subscribe({
      next: resp => {
        this.characters = resp?.results ?? [];
        this.loading = false;
      },
      error: err => {
        console.error('RM list error', err);
        this.error = 'No se pudo cargar personajes. Reintentar.';
        this.loading = false;
      }
    });
  }

 
  openDetail(id: number) {
    this.router.navigate(['/rick', id]);
  }
}
