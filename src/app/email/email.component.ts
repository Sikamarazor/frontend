import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  userInfo: any;
  mediumPicture: String = '';
  email: String = '';
  constructor(private homeService: HomeService) {
  }

  ngOnInit() {

    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    console.log(this.userInfo);
    this.mediumPicture = this.userInfo.picture.medium;
    this.email = this.userInfo.email;

  }

}
