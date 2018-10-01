import { Component, OnInit } from '@angular/core';
import { CivilStatusService } from '../../services/civil-status.service';

@Component({
  selector: 'app-civil-status',
  templateUrl: './civil-status.component.html',
  styleUrls: ['./civil-status.component.scss'],
  providers: [CivilStatusService]
})
export class CivilStatusComponent implements OnInit {

  constructor(
    public _CivilStatusService: CivilStatusService
  ) { }

  ngOnInit() {
  }

}
