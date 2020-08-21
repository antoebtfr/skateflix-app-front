import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../class/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3000/user';

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }

  public deleteUser(id: number) {
    document.location.reload();
    return this.http.delete(this.URL + `/${id}`);
  }

  public modifyUser(id: number, user): Observable<any> {
    return this.http.put(this.URL + `/${id}`, user);
  }
}
