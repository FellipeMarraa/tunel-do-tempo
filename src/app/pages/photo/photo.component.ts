import {Component, OnInit, Renderer2} from '@angular/core';
import {DialogService} from "../../services/dialog.service";
import {images} from "../../../assets/images";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit{

  constructor(private renderer: Renderer2,
              private dialogService: DialogService) {
    this.renderer.setStyle(document.body, 'background-image', 'url(./assets/images/background-initial.png)');
    this.renderer.setStyle(document.body, 'background-repeat', 'no-repeat');
    this.renderer.setStyle(document.body, 'background-size', 'cover');
  }

  ngOnInit() {
    this.dialogService.setInicialPage(false);
    this.dialogService.setPaginaAtual(2);
  }

  images = images;

  selectedImage: any;

  openImage(image: any) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }

}
