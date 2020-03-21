import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Editora } from './editora.model';

@Injectable({
  providedIn: 'root'
})
export class EditorasService {

  private readonly API = 'http://localhost:3003/api/editoras';

  constructor(
    private http: HttpClient
  ) { }

  listar() {
    return this.http.get<Editora[]>(this.API);
  }

  inserir(editora: Editora) {
    return this.http.post<Editora>(this.API, editora);
  }
}
