import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { VideoService } from 'src/app/shared/service/video.service';

@Component({
  selector: 'app-post-video',
  templateUrl: './post-video.component.html',
  styleUrls: ['./post-video.component.scss']
})
export class PostVideoComponent implements OnInit, AfterViewInit {

  constructor(private videoService: VideoService) { }

  private fileToUpload: File;
  private fileToUploadCategory: string;

  @ViewChild('videoName', {static: false}) private videoNameInputHTML;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.videoNameInputHTML = this.videoNameInputHTML.nativeElement;
  }

  public handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }


  public uploadFileToActivity() {
    if (!this.checker()) {
      return null;
    }

    const objectToSend = {
      file: this.fileToUpload,
      category: this.fileToUploadCategory,
      videoname: this.videoNameInputHTML.value
    };

    this.videoService.postFile(objectToSend).subscribe(data => {}, err => console.log(err));

    alert('Le fichier a bien été envoyé');
  }

  public checkFile() {
    console.log(this.fileToUpload);
  }

  public handleFileCategory(value: string) {
    this.fileToUploadCategory = value;
    console.log(this.fileToUploadCategory);
  }

  private checker() {
    const noCategoryError = 'Veuillez sélectionner une catégorie';
    const noFileError = 'Veuillez sélectionner une vidéo';
    const noVideoNameError = 'Veuillez sélectionner un nom de vidéo';


    if (this.fileToUploadCategory === undefined) {
      return alert(noCategoryError);
    } else if (this.fileToUploadCategory.length === 0) {
      return alert(noCategoryError);
    }

    if (this.fileToUpload === undefined) {
      return alert(noFileError);
    }

    if (this.videoNameInputHTML.value.length === 0) {
      return alert(noVideoNameError);
    }

    return true;
  }

}
