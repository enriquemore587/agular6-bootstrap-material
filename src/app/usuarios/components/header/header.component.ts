import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _router: Router) { }

  ngOnInit() {
  }

  public newUser() {
    this._router.navigate(['/usuarios-panel/create-user']);
  }

  public usuariosLista() {
    this._router.navigate(['/usuarios-panel/user-list']);
  }

  public salir(){
    this._router.navigate(['/']);
  }
}
