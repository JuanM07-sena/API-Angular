import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DragonballApiService } from '../../services/dragonball/dragonball-api';

@Component({
  selector: 'app-dragonball-list_jm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dragonball-list-jm.html',
  styleUrls: ['./dragonball-list-jm.scss']
})
export class DragonballListJm implements OnInit {
  characters: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private api: DragonballApiService, private router: Router) {}

  ngOnInit() {
    this.loading = true;
    this.error = null;
    this.api.getCharacters().subscribe({
      next: list => { this.characters = list ?? []; this.loading = false; },
      error: err => { console.error('DB list error', err); this.error = 'No se pudo cargar Dragon Ball'; this.loading = false; }
    });
  }
  openDetail(c: any) {
    const id = c.id ?? c._id ?? this.characters.indexOf(c);
    this.router.navigate(['/dragonball', id]);
  }
}
