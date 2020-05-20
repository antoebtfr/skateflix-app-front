import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../class/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = 'assets/data/fake-admin.json' ;

  constructor(private http: HttpClient) { }

  public getList(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.url);
  }
}
