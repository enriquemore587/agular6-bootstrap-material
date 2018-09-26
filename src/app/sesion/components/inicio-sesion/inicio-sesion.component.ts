import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  public recordarPassword(){
    this._router.navigate(['/sesion-panel/recuperar-password']);
  }

  public actualziarPassword(){
    this._router.navigate(['/sesion-panel/actualziar-password']);
  }

  public crearCuenta(){
    this._router.navigate(['/usuarios-panel/create-user']);
  }

}
