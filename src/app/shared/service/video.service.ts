import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3000/video';

 public postFile(object) {
    const endpoint = `${this.URL}/2/${object.category}/${object.videoname}` ;
    const formData: FormData = new FormData();
    formData.append('file', object.file, object.file.name);
    return this.http
    .post(endpoint, formData);
  }

}
