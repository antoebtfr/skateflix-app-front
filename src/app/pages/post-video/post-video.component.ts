import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/shared/service/video.service';

@Component({
  selector: 'app-post-video',
  templateUrl: './post-video.component.html',
  styleUrls: ['./post-video.component.scss']
})
export class PostVideoComponent implements OnInit {

  constructor(private videoService: VideoService) { }

  private fileToUpload: File;
  ngOnInit() {
  }

  public handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }


  public uploadFileToActivity() {
    this.videoService.postFile(this.fileToUpload).subscribe(data => {}, err => console.log(err));
    console.log('Le fichier a bien été envoyé');
  }

  public checkFile() {
    console.log(this.fileToUpload);
  }

}
