import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  mediumPicture: String = '';
  password: String = '';
  userInfo: any;

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {

    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    console.log(this.userInfo);
    this.mediumPicture = this.userInfo.picture.medium;
    this.password = this.userInfo.login.password;
    // Calling home service with the API
    // this.homeService.generateRandomUser().subscribe((data: any) => {
    //   this.userInfo = data.results[0];

    // });
  }

}
