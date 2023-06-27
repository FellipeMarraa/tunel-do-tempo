import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarouselService} from "../../services/carousel.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private route: ActivatedRoute,
              private carouselService: CarouselService) {
  }

  begin: any;

  ngOnInit() {
    this.begin = this.carouselService.getBegin();
    console.log('home-button', this.carouselService.getShowButton());
    console.log('home-begin', this.begin);
  }

}
