import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarouselService} from "../../services/carousel.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
              public carouselService: CarouselService,
              private route: ActivatedRoute) {
  }

  images: string[] = [
    'assets/image2.png',
    'assets/background-home.png',
    'assets/image3.png'
  ];

  showRoles: boolean = this.carouselService.getShowRoles();
  showButton: boolean = this.carouselService.getShowButton();
  begin: boolean = this.carouselService.getBegin();
  timeInternal: any;


  ngOnInit(): void {

    if (!this.begin) {
      this.timeInternal = setTimeout(() => {
        this.showButton = this.carouselService.setShowButton(true);
      }, 0);
    }


    this.carouselService.startCarousel(this.images);
  }

  ngOnDestroy(): void {
    this.carouselService.stopCarousel();
  }

  getBackgroundStyle(image: string, index: number): object {
    return {'background-image': `url(${image})`, 'z-index': index};
  }

  start() {
    this.begin = this.carouselService.setBegin(true);
    this.showButton = this.carouselService.setShowButton(true);
    this.showRoles = this.carouselService.setShowRoles(true);

    this.router.navigate(['/initial']);

  }
}
