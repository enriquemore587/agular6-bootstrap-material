import { Component, OnInit } from '@angular/core';
import { CreateUserService } from '../../services/create-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  providers: [CreateUserService]
})
export class CreateUserComponent implements OnInit {

  constructor(
    public _CreateUserService: CreateUserService
  ) { }

  ngOnInit() {
  }

}
