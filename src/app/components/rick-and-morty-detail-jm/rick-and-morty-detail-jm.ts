import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyApiService } from '../../services/rickandmorty/rick-and-morty-api';

@Component({
  selector: 'app-rick-and-morty-detail_jm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rick-and-morty-detail-jm.html',
  styleUrls: ['./rick-and-morty-detail-jm.scss']
})
export class RickAndMortyDetailJm implements OnInit {
  character: any = null;
  loading = false;
  error: string | null = null;
  episodePreview = '';

  constructor(private route: ActivatedRoute, private api: RickAndMortyApiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idStr = params.get('id');
      const idNum = idStr !== null ? Number(idStr) : NaN;

      if (Number.isNaN(idNum)) {
        this.character = null;
        this.error = 'ID inválido';
        return;
      }

      this.loading = true;
      this.error = null;
      this.api.getCharacterById(idNum).subscribe({
        next: c => {
          this.character = c;
          this.episodePreview = (c?.episode ?? []).slice(0,3).map((u: string) => {
            const parts = String(u).split('/');
            return parts[parts.length-1] || u;
          }).join(', ');
          this.loading = false;
        },
        error: err => {
          console.error('RM detail error', err);
          this.error = 'No se pudo cargar el personaje';
          this.loading = false;
        }
      });
    });
  }
}
