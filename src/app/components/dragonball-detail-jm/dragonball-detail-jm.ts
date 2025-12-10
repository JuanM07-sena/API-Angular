import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DragonballApiService } from '../../services/dragonball/dragonball-api';

@Component({
  selector: 'app-dragonball-detail_jm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dragonball-detail-jm.html',
  styleUrls: ['./dragonball-detail-jm.scss']
})
export class DragonballDetailJm implements OnInit {
  character: any = null;
  loading = false;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private api: DragonballApiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.loading = true;
      this.error = null;


      this.api.getCharacterById(id ?? '').subscribe({
        next: c => { this.character = c; this.loading = false; },
        error: () => {
          this.api.getCharacters().subscribe({
            next: list => 
              { 
                this.character = list.find((x:any) => String(x.id) === String(id)) ?? list[Number(id)] ?? null; this.loading = false; },
            error: err => { console.error('DB detail fallback error', err);
               this.error = 'No se pudo cargar personaje'; this.loading = false; }
          });
        }
      });
    });
  }
}
