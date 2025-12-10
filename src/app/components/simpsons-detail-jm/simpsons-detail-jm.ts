import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SimpsonsApiService } from '../../services/simpsons/simpsons-api';

@Component({
  selector: 'app-simpsons-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simpsons-detail-jm.html',
  styleUrls: ['./simpsons-detail-jm.scss']
})
export class SimpsonsDetailJm implements OnInit {

  character: any = null;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private api: SimpsonsApiService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.loadCharacter(id);
    });
  }

  loadCharacter(id: any) {
    this.loading = true;

    this.api.getAll().subscribe((resp: any) => {
      const list = resp.results || [];
   
      this.character = list.find((c: any) => c.id == id || c._id == id);
      this.loading = false;
    });
  }
}
