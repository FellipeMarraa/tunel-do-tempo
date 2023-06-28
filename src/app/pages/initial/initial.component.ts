import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarouselService} from "../../services/carousel.service";

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit{

  constructor(private route: ActivatedRoute,
              private carouselService: CarouselService) {
  }

  begin: any;

  ngOnInit() {
    this.carouselService.setBegin(true);
    this.begin = this.carouselService.getBegin();
 }

}
