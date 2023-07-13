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
     {url: 'assets/videos/video.wmv'},
    {url: 'assets/videos/video1.mov'},
    {url: 'assets/videos/video2.mov'},
    {url: 'assets/videos/video3.mov'},
    {url: 'assets/videos/video4.mov'},
    {url: 'assets/videos/video5.mov'},
    {url: 'assets/videos/video6.mov'},
    {url: 'assets/videos/video7.mov'},
    {url: 'assets/videos/video8.mov'},
    {url: 'assets/videos/video9.mov'},
    {url: 'assets/videos/video10.mov'},
    {url: 'assets/videos/video11.mov'},
    {url: 'assets/videos/video12.mov'},
    {url: 'assets/videos/video13.mov'},
    {url: 'assets/videos/video14.mov'},
    {url: 'assets/videos/video15.mov'},
    {url: 'assets/videos/video16.mov'},
    {url: 'assets/videos/video17.mov'},
    {url: 'assets/videos/video18.mov'},
    {url: 'assets/videos/video19.mov'},
    {url: 'assets/videos/video20.mov'},
    {url: 'assets/videos/video21.mov'}

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
