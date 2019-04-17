import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  userInfo: any;
  mediumPicture: String = '';
  address: String = '';
  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    // Calling home service with the API

    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    console.log(this.userInfo);
    this.mediumPicture = this.userInfo.picture.medium;
    this.address = this.userInfo.location.street;

  }

}
