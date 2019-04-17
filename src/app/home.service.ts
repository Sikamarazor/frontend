import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public http: Http) { }

  // Calling random API
  generateRandomUser() {
    const response = this.http.get('https://randomuser.me/api').pipe(
      map(res => res.json()) // or any other operator
    );
    return response;
  }
}
