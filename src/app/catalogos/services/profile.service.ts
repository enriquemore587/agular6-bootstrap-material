import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
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
}
