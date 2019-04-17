import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { HighlightResult } from 'ngx-highlightjs';

declare var hljs: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userInfo: any;
  lastname: String = '';
  firstname: String = '';
  mediumPicture: String = '';
  email: String = '';
  dob: String = '';
  address: String = '';
  cell: String = '';
  password: String = '';

  response: HighlightResult;

  code = `sf`;

  onHighlight(e) {
    this.response = {
      language: e.language,
      r: e.r,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    };
  }

  constructor(private homeService: HomeService) {
   }

  ngOnInit() {

    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

    if (!this.userInfo) {
      this.mediumPicture = this.userInfo.picture.medium;
      this.lastname = this.userInfo.name.last;
      this.firstname = this.userInfo.name.first;
    } else {
      // Calling home service with the API
      this.homeService.generateRandomUser().subscribe((data: any) => {
        console.log(data);
        this.userInfo = data.results[0];
        sessionStorage.setItem('userInfo', JSON.stringify(this.userInfo));
        console.log(this.userInfo);
        this.lastname = this.userInfo.name.last;
        this.firstname = this.userInfo.name.first;
        this.mediumPicture = this.userInfo.picture.medium;
        this.email = this.userInfo.email;
        this.dob = this.userInfo.dob.date;
        this.address = this.userInfo.location.street;
        this.cell = this.userInfo.cell;
        this.password = this.userInfo.login.password;
      });
    }
  }

}
