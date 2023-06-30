import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DialogService} from "../../services/dialog.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor(private dialogService: DialogService,
              private renderer: Renderer2) {

    this.renderer.setStyle(document.body, 'background-image', 'url(./assets/images/background-initial.png)');
    this.renderer.setStyle(document.body, 'background-repeat', 'no-repeat');
    this.renderer.setStyle(document.body, 'background-size', 'cover');
  }

  ngOnInit() {
    this.dialogService.setInicialPage(false);
    this.dialogService.setPaginaAtual(2);
  }

  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  videos = [
    {url: 'https://1drv.ms/v/s!Ap5Wbk-5j8Yj92PLYzDxyHS2yqOH?e=2ZrX07'},
    {url: 'assets/videos/video.webm'},
     {url: 'assets/videos/video.webm'},
     {url: 'assets/videos/video.webm'},
     {url: 'assets/videos/video.webm'},
     {url: 'assets/videos/video.webm'},
     {url: 'assets/videos/video.webm'},
     {url: 'assets/videos/video.webm'},
     {url: 'assets/videos/video.webm'},
     {url: 'assets/videos/video.webm'},
     {url: 'assets/videos/video.webm'},
     {url: 'assets/videos/video.webm'},

  ];

  selectedVideo: any;

  openVideo(video: any) {
    this.selectedVideo = video;
    this.pauseOtherVideos();
  }

  pauseOtherVideos() {
    const videoElements = document.getElementsByTagName('video');
    for (let i = 0; i < videoElements.length; i++) {
      if (videoElements[i] !== this.videoPlayer.nativeElement) {
        videoElements[i].pause();
      }
    }
  }

  closeVideo() {
    this.selectedVideo = null;
  }

}
