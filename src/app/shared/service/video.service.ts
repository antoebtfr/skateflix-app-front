import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3000/video';

 public postFile(fileToUpload: File) {
    const endpoint = this.URL + '/2';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http
    .post(endpoint, formData);
  }

}
