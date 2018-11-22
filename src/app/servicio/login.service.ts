import { Usuariolog } from './../model/usuariologjson';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuariojson';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  SERVER: string = 'http://localhost:8081/usuario/';

  constructor(public httpClient: HttpClient) {}


  userlogin(username: Usuariolog){
    return this.httpClient.get<Usuariolog>(this.SERVER + username);
  }
  crearUsuario(user: Usuario){
    return this.httpClient.post<Usuario>(this.SERVER, user);
  }

}
