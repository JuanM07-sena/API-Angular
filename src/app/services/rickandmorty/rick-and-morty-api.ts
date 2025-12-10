import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RickApiListResponse, RickCharacter } from '@app/models/rick-character.model';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyApiService {
  private base = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1): Observable<RickApiListResponse> {
    return this.http.get<RickApiListResponse>(`${this.base}?page=${page}`);
  }

  getCharacterById(id: number): Observable<RickCharacter> {
    return this.http.get<RickCharacter>(`${this.base}/${id}`);
  }
}
