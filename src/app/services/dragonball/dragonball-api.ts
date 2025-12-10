import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { DragonCharacter } from '@app/models/dragon-ball-character-model';

@Injectable({
  providedIn: 'root'
})
export class DragonballApiService {
  private base = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<DragonCharacter[]> {
    return this.http.get<any>(this.base).pipe(
      map(resp => resp.items ?? [])
    );
  }

  getCharacterById(id: number | string): Observable<DragonCharacter> {
    return this.http.get<any>(`${this.base}/${id}`).pipe(
      map(resp => resp)
    );
  }
}
