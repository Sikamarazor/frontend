import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';

@Component({
  selector: 'app-cellnur',
  templateUrl: './cellnur.component.html',
  styleUrls: ['./cellnur.component.css']
})
export class CellnurComponent implements OnInit {
  userInfo: any;
  mediumPicture: String = '';
  cell: String = '';
  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    // Calling home service with the API

    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    console.log(this.userInfo);
    this.mediumPicture = this.userInfo.picture.medium;
    this.cell = this.userInfo.cell;

  }

}
