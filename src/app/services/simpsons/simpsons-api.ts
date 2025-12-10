import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimpsonsApiService {

  url = 'https://thesimpsonsapi.com/api/characters';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(this.url);
  }

  getOne(id: string) {
    return this.http.get<any>(`${this.url}/${id}`);
  }
}