import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() {
  }

  interval: any;
  activeIndex = 0;
  begin: any;
  showButton: any;
  showRoles: any;
  isQuestion: any;

  startCarousel(images: string[]): void {
    this.interval = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % images.length;
    }, 3000); // Defina o intervalo de tempo entre as transições de imagem (em milissegundos)
  }

  stopCarousel(): void {
    clearInterval(this.interval);
  }

  setBegin(begin: boolean): boolean {
    return this.begin = begin;
  }

  getBegin(): boolean {
    return this.begin;
  }

  setShowButton(showButton: boolean): boolean {
    return this.showButton = showButton;
  }

  getShowButton(): boolean{
    return this.showButton;
  }

  setShowRoles(showRoles: boolean): boolean{
    return this.showRoles = showRoles;
  }

  getShowRoles(): boolean{
    return this.showRoles;
  }

  setQuestion(isQuestion: boolean): boolean{
    return this.isQuestion = isQuestion;
  }

  getIsQuestion(): boolean{
    return this.isQuestion;
  }

}
