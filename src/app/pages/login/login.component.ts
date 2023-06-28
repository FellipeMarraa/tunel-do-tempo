import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../components/dialog/dialog.component";
import {CarouselService} from "../../services/carousel.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{
  constructor(private router: Router,
              private dialog: MatDialog,
              private route: ActivatedRoute,
              private carouselService: CarouselService) {

  }

  showRoles: any;
  begin: any;
  showButton: any;

  ngOnInit() {
    this.begin = this.carouselService.getBegin();
    this.showRoles = this.carouselService.getShowRoles();
    this.showButton = this.carouselService.getShowButton();
    console.log('login-begin', this.begin);
    console.log('login-showRoles', this.showRoles);
    console.log('login-showButton', this.showButton);
  }

  ngOnDestroy(): void {
    this.carouselService.stopCarousel();
  }

  images: string[] = [
    'assets/image2.png',
    'assets/background-home.png',
    'assets/image3.png'
  ];

  frase1: string = '';
  frase2: string = '';
  tips: string[] = [
    'Em algum lugar do apartamento está escondido as duas frases para conseguir acessar e seguir para a próxima etapa',
    'Já procurou na cozinha?',
    'Talvez dentro de uma sacola? Ou uma caixa?'
  ]
  tip: string = '';
  titleDialog: string = '';
  showErrorMessage: boolean = false;
  showTip: boolean = false;
  paginaAtual: number = 1;

  login() {
    if (this.frase1 === 'FRASE1' && this.frase2 === 'FRASE2'){
      this.router.navigate(['/home']);
    }else{
      this.showErrorMessage = true;
    }
  }

  goNextStep() {
    this.showErrorMessage = false;
    this.begin = false;
  }

  backToRoles() {
    this.showErrorMessage = false;
    this.begin = true;
  }

  randomTips(){

    this.showTip = true;
    const randomIndex = Math.floor(Math.random() * this.tips.length);
    this.tip = this.tips[randomIndex];

    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: this.titleDialog,
        content: this.tip
      }
    });

  }

  goNextPage() {
    this.paginaAtual++;
    console.log(this.paginaAtual);
  }

  backwardPage() {
    this.paginaAtual--;
    console.log(this.paginaAtual);
  }
}
