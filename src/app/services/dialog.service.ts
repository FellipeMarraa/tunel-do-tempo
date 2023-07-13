import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  isInitialPage: any;
  paginaAtual: any = 1;
  showVideo: any = false;

  setInicialPage(isInitial: any): void {
    this.isInitialPage = isInitial;
  }

  getIsInicialPage(): string {
    return this.isInitialPage;
  }

  setPaginaAtual(paginaAtual: any){
    this.paginaAtual = paginaAtual;
  }

  getPaginaAtual(){
    return this.paginaAtual;
  }

  setShowVideo(showVideo: boolean){
    this.showVideo = showVideo;
  }

  getShowVideo(){
    return this.showVideo;
  }


}
