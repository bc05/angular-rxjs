import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  buscar(cep: number) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    return this.http.get(url);
  }
}
