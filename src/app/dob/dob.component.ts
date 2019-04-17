import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';

@Component({
  selector: 'app-dob',
  templateUrl: './dob.component.html',
  styleUrls: ['./dob.component.css']
})
export class DobComponent implements OnInit {
  userInfo: any;
  mediumPicture: String = '';
  dob: String = '';
  constructor(private homeService: HomeService) {
  }

  ngOnInit() {

    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    console.log(this.userInfo);
    this.mediumPicture = this.userInfo.picture.medium;
    this.dob = this.userInfo.dob.date;
  }

}
