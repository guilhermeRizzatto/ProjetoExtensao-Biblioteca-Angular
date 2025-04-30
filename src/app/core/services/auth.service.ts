import { environment } from './../enviroment/enviroment';
import { Injectable } from '@angular/core';
import { DadosUsuario } from '../dados/dadosUsuario';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  private usuarioLogado: DadosUsuario | null = null;

  getUsuario() {
    return this.usuarioLogado;
  }

  login(dados: DadosUsuario): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/usuario/login`, dados);
  }
}
