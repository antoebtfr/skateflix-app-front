import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:5030/file';

 public postFile(fileToUpload: File) {
    const endpoint = this.URL + '/13';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http
    .post(endpoint, formData);
  }

}
