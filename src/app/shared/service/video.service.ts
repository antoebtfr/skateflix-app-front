import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3000/video';

 public postFile(object) {
    const endpoint = `${this.URL}/${object.userId}/${object.category}/${object.videoname}/${object.location}` ;
    const formData: FormData = new FormData();
    formData.append('file', object.file, object.file.name);
    return this.http
    .post(endpoint, formData);
  }

  public get(): Observable<any[]> {
    return this.http.get<any[]>(this.URL);
  }

}
