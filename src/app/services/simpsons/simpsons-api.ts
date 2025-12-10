import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { SimpsonCharacter } from '@app/models/simpson-character.model';

@Injectable({
  providedIn: 'root'
})
export class SimpsonsApiService {
  private base = 'https://thesimpsonsapi.com/api/characters';

  constructor(private http: HttpClient) {}

 getCharacters(): Observable<SimpsonCharacter[]> {
  return this.http.get<any>(`${this.base}?limit=20`).pipe(
    map(resp => resp.items ?? [])
  );
}


  getCharacterById(id: number | string): Observable<SimpsonCharacter> {
    return this.http.get<any>(`${this.base}/${id}`).pipe(
      map(resp => resp.items?.[0] ?? resp)
    );
  }
}
