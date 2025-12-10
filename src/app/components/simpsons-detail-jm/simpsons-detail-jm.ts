import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SimpsonsApiService } from '../../services/simpsons/simpsons-api';

@Component({
  selector: 'app-simpsons-detail_jm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simpsons-detail-jm.html',
  styleUrls: ['./simpsons-detail-jm.scss']
})
export class SimpsonsDetailJm implements OnInit {
  character: any = null;
  loading = false;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private api: SimpsonsApiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idStr = params.get('id');
      const idx = Number(idStr);
      this.loading = true;
      this.error = null;


      this.api.getCharacters().subscribe({
        next: list => {
          if (idStr != null) {
            const found = list.find((x: any) => String(x.id) === String(idStr) || String(x._id) === String(idStr));
            this.character = found ?? list[idx] ?? null;
          } else {
            this.character = list[0] ?? null;
          }
          this.loading = false;
        },
        error: err => {
          console.error('Simpson detail error', err);
          this.error = 'No se pudo cargar el personaje';
          this.loading = false;
        }
      });
    });
  }
}
