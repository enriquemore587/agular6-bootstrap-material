import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

import { Perfil } from '../models/Perfil';
import { Clinica } from '../models/Clinica';
import { TypeUser } from '../models/TypeUser';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CreateUserService {
  public url: string = environment.url;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': '123' });
  
  constructor(
    private _http: HttpClient,
    private _Router: Router,
    public dialog: MatDialog,
    public snackBar: MatSnackBar  // messages
  ) {
    // this.getProfilesList();
  }
  // start Metodo Messages
  public showMessage(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }
  // end Metodo Messages

  public clinicaList: Clinica[] = [
    { id: 1, description: 'DENTISTAS MEXICANOS' },
    { id: 2, description: 'CLÍNICA INTEGRAL MÉXICO' },
    { id: 3, description: 'CONSULTORIO SONRRISAS' }
  ];
  public profileList: Perfil[] = [];
  public typeUserList: TypeUser[] = [
    { id: 1, description: 'MOBILE' },
    { id: 2, description: 'WEB' },
    { id: 3, description: 'MOBILE & WEB' }
  ];

  public createUser() {
    this._http.post(`${this.url}user/register`, { body: {} }, { headers: this.httpHeaders })
      .subscribe(
        (res: any) => {
          if (res.status == 0 && res.message == 'successful') {
            this.showMessage('Usuario creado exitosamente', 'Ocultar');
          }
          else {
            this.showMessage(`${res.message} ya registrado`, 'Ocultar');
          }
        },
        (err: any) => console.log('error', err)
      );
  }


  public getProfilesList() {
    console.log(1);
    
    this._http.get(`${this.url}profile/list`,
      { headers: this.httpHeaders })
      .subscribe(
        (resp: any) => {
          this.profileList = <Perfil[]>resp;
        },
        error => console.log('error', error)
      );
  }


}
