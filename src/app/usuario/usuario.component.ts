import { LoginService } from './../servicio/login.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuariojson';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  public data: Observable<Array<Usuario>>;
  listaUsuario: Array<Usuario>;

 // declaramos variable y inyectamos la dependencia: private loginService: LoginService
  constructor() { }

  ngOnInit() {


  }

}
