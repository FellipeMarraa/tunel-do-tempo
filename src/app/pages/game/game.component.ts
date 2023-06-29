import {Component, OnInit, Renderer2} from '@angular/core';
import {DialogService} from "../../services/dialog.service";
import {RoleDialogComponent} from "../../components/role-dialog/role-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {TipDialogComponent} from "../../components/tip-dialog/tip-dialog.component";
import {allTips} from "../../../assets/allTips";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private renderer: Renderer2,
              private dialogService: DialogService,
              private dialog: MatDialog,
              private localStorage: LocalStorageService) {

    this.respostas = this.localStorage.obterRespostas();
  }

  ngOnInit() {
    if (this.isJsonEmpty(this.localStorage.obterRespostas())){
      this.salvarResposta(0, ['','']);
    }
    this.respostas = this.localStorage.obterRespostas();
    this.dialogService.setInicialPage(false);
    this.dialogService.setPaginaAtual(2);
    this.renderer.setStyle(document.body, 'background-image', 'url(./assets/background-initial.png)');
    // this.renderer.setStyle(document.body, 'background-repeat', 'no-repeat');
    this.renderer.setStyle(document.body, 'background-size', 'cover');
    console.log(this.respostas);
  }

  openRoles() {
    this.dialogService.setInicialPage(false);
    this.dialogService.getPaginaAtual();
    const dialogRef = this.dialog.open(RoleDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.dialogService.setInicialPage(false);
    });
  }

  respostas: any = {};

  salvarResposta(perguntaId: number, resposta: string[]) {
    this.localStorage.salvarResposta(perguntaId, resposta);
  }

  incorretAnswer: any = false;
  questionNumber: number = 0;
  tipIndex: number = 0;
  tip: any;
  tips: any = allTips[0];
  titleTips: string = 'Dica';

  // Question 1
  input1questao1: any = '';
  input2questao1: any = '';

  // Question 2
  input1questao2: string = '';

  openTips() {

    let content = 'Suas dicas acabaram';

    if (this.tips.length > 0){
      content = this.tips[this.tipIndex];
    }

    const dialogRefTips = this.dialog.open(TipDialogComponent, {
      data: {
        title: this.titleTips,
        content: content
      }
    });

    dialogRefTips.afterClosed().subscribe(result => {
      this.tips.splice(this.tipIndex, 1);
      if (this.tips.length > 0){
        this.tipIndex = Math.floor(Math.random() * this.tips.length);
        this.tip = this.tips[this.tipIndex];
      }
    });

    console.log(this.tips);
  }

  nextQuestion() {

    switch (this.questionNumber) {
      case 0:
        if (this.input1questao1 == "FRASE1" && this.input2questao1 == "FRASE2") {
          this.questionNumber++;
          this.salvarResposta(this.questionNumber, [this.input1questao1, this.input2questao1])
          this.resetTips();
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }

        console.log(this.tip);
        break;
      case 1:
        if (this.input1questao2 == "TESTE") {
          this.questionNumber++;
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }
        break;
      case 2:
        // statement N
        break;
      default:
        //
        break;
    }
  }


  resetTips(){
    this.tips = allTips[this.questionNumber];
    this.tipIndex = 0;
  }

  isJsonEmpty(jsonObj: any) {
    return Object.keys(jsonObj).length === 0;
  }
}
