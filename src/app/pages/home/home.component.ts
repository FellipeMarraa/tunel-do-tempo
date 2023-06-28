import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DialogComponent} from "../../components/dialog/dialog.component";
import {CarouselService} from "../../services/carousel.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
  constructor(private router: Router,
              private carouselService: CarouselService) {

  }

  showRoles: any;
  begin: any;
  showButton: any;

  ngOnInit() {
   this.carouselService.setBegin(true);
    this.begin = this.carouselService.getBegin();
    this.showRoles = this.carouselService.getShowRoles();
    this.showButton = this.carouselService.getShowButton();
  }

  ngOnDestroy(): void {
    this.carouselService.stopCarousel();
  }

  paginaAtual: number = 1;

  beginQuiz() {
    this.showButton = this.carouselService.setQuestion(true);
    this.router.navigate(['/questions'])
  }

  goNextPage() {
    this.paginaAtual++;
  }

  backwardPage() {
    this.paginaAtual--;
  }
}
