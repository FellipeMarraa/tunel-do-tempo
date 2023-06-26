import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  images: string[] = [
    'assets/image2.jpg',
    'assets/background-home.png',
    'assets/image3.jpg'
  ];

  activeIndex = 0;
  interval: any;

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  startCarousel(): void {
    this.interval = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    }, 3000); // Defina o intervalo de tempo entre as transições de imagem (em milissegundos)
  }

  stopCarousel(): void {
    clearInterval(this.interval);
  }

  getBackgroundStyle(image: string, index: number): object {
    return { 'background-image': `url(${image})`, 'z-index': index };
  }

}
