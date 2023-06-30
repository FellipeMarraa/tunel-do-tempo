import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private respostas: any = {};
  private params: any = {};

  constructor() {
    const respostasSalvas = localStorage.getItem('respostas');
    const paramsSaved = localStorage.getItem('params');

    if (respostasSalvas) {
      this.respostas = JSON.parse(respostasSalvas);
    }
    if (paramsSaved) {
      this.params = JSON.parse(paramsSaved);
    }
  }

  salvarResposta(questionNumber: number, resposta: string[]) {
    this.respostas[questionNumber] = resposta;
    localStorage.setItem('respostas', JSON.stringify(this.respostas));
  }

  obterRespostas(): any {
    return this.respostas;
  }

  salvarParams(questionNumber: number, tipIndex: number, tips: string[]) {
    this.params = [questionNumber, tipIndex, tips];
    localStorage.setItem('params', JSON.stringify(this.params));
  }

  obterParams(): any {
    return this.params;
  }
}
