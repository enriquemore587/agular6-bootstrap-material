import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-users',
  templateUrl: './main-users.component.html',
  styleUrls: ['./main-users.component.scss']
})
export class MainUsersComponent implements OnInit {

  constructor(public _router: Router) { }

  ngOnInit() {
  }

  public salir(){
    this._router.navigate(['/']);
  }

}
