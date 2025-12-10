import {  Component, OnInit } from '@angular/core';
import { SimpsonsApiService } from '../../services/simpsons/simpsons-api';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simpsons-list',
  templateUrl: './simpsons-list-jm.html',
  styleUrls: ['./simpsons-list-jm.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class SimpsonsListJm implements OnInit {

  protected characters: any[] = [];
  protected limit: number = 0;

  constructor(
    private _simpsonsService: SimpsonsApiService,
    private _router: Router,

  ) {}

  ngOnInit(): void {
    this._simpsonsService.getAll().subscribe((resp: any) => {
      this.characters = resp.results;
      this.limit = resp.info.count;
  
});
  }

  goToDetail(id: number) {
    this._router.navigate(['/simpsons', id]);
  }
}