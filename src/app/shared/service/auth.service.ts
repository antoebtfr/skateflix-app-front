import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3000/auth';

  public signUp(user) {
    return this.http.post(this.URL + '/signup', user);
  }
}
