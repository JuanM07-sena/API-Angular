import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SimpsonsApiService } from '../../services/simpsons/simpsons-api';

@Component({
  selector: 'app-simpsons-list_jm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simpsons-list-jm.html',
  styleUrls: ['./simpsons-list-jm.scss']
})
export class SimpsonsListJm implements OnInit {
  characters: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private api: SimpsonsApiService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = null;
    this.api.getCharacters().subscribe({
      next: list => { this.characters = list ?? []; this.loading = false; },
      error: err => { console.error('Simpsons list error', err); this.error = 'No se pudo cargar Simpsons'; this.loading = false; }
    });
  }

  openDetail(p: any) {
    const id = p.id ?? p._id ?? this.characters.indexOf(p);
    this.router.navigate(['/simpsons', id]);
  }
}
