import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CivilStatusToList } from '../models/CivilStatusToList';
import { CivilStatusSaveUpdate } from '../models/CivilStatusSaveUpdate';

@Injectable({
  providedIn: 'root'
})
export class CivilStatusService {
  public url: string = environment.url;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': '123' });
  public lista: CivilStatusToList[] = [];
  public civilStatusSaveUpdate: CivilStatusSaveUpdate = new CivilStatusSaveUpdate();
  public saveOrUpdate: boolean = true;

  constructor(
    private _http: HttpClient,
    private _Router: Router,
    public dialog: MatDialog,
    public snackBar: MatSnackBar  // messages
  ) {
    this.loadCatalogo();
  }
  // start Metodo Messages
  public showMessage(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }
  // end Metodo Messages

  public loadCatalogo() {
    this._http.get(`${this.url}civilStatus/list`,
      { headers: this.httpHeaders })
      .subscribe(
        (resp: any) => {
          this.lista = <CivilStatusToList[]>resp;
        },
        (err: any) => console.log('error', err)
      );
  }

  public upadte() {
    this._http.post(`${this.url}civilStatus/update`, this.civilStatusSaveUpdate, { headers: this.httpHeaders })
      .subscribe(
        (res: any) => {
          if (res.status == 'SUCCESS') {
            this.clearData();
            this.loadCatalogo();
            this.showMessage('Catálogo guardado', 'Ocultar');
          }
        },
        (err: any) => console.log('error', err)
      );
  }


  public save() {
    this._http.post(`${this.url}civilStatus/save`, { description: this.civilStatusSaveUpdate.description }, { headers: this.httpHeaders })
      .subscribe(
        (res: any) => {
          if (res.status == 'SUCCESS') {
            this.clearData();
            this.loadCatalogo();
            this.showMessage('Catálogo guardado', 'Ocultar');
          }
        },
        (err: any) => console.log('error', err)
      );
  }

  public clearData(){
    this.saveOrUpdate = true;
    this.civilStatusSaveUpdate = new CivilStatusSaveUpdate();
  }

  public itemToEdit(item: CivilStatusSaveUpdate) {
    this.saveOrUpdate = false;
    this.civilStatusSaveUpdate = item;
  }

  public SaveUpdate() {
    if (this.saveOrUpdate) {
      this.save();
    } else {
      this.upadte();
    }
  }
}
