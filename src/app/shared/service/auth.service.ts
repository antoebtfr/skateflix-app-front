import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3000/auth';

  public signUp(user) {
    return this.http.post(this.URL + '/signup', user);
  }

  public logIn(user): Observable<object> {
    console.log(user);
    return this.http.post(this.URL + '/signin', user);
  }
}
