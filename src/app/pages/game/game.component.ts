import {Component, OnInit, Renderer2} from '@angular/core';
import {DialogService} from "../../services/dialog.service";
import {RoleDialogComponent} from "../../components/role-dialog/role-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {TipDialogComponent} from "../../components/tip-dialog/tip-dialog.component";
import {allTips} from "../../../assets/allTips";
import {LocalStorageService} from "../../services/local-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private renderer: Renderer2,
              private router: Router,
              private dialogService: DialogService,
              private dialog: MatDialog,
              private localStorage: LocalStorageService) {

    this.respostas = this.localStorage.obterRespostas();
    this.params = this.localStorage.obterParams();
  }

  ngOnInit() {
    if (this.isJsonEmpty(this.localStorage.obterRespostas())) {
      this.salvarResposta(0, ['', '']);
    }

    this.params = this.localStorage.obterParams();

    this.respostas = this.localStorage.obterRespostas();

    this.dialogService.setInicialPage(false);
    this.dialogService.setPaginaAtual(2);

    this.renderer.setStyle(document.body, 'background-image', 'url(./assets/images/background-initial.png)');
    this.renderer.setStyle(document.body, 'background-repeat', 'no-repeat');
    this.renderer.setStyle(document.body, 'background-size', 'cover');
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
  params: any = {};

  salvarResposta(perguntaId: number, resposta: string[]) {
    this.localStorage.salvarResposta(perguntaId, resposta);
  }

  salvarParams(questionNumber: number, tipIndex: number) {
    this.localStorage.salvarParams(questionNumber, tipIndex);
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

  // Question 2
  input1questao3: string = '';

  // Question 2
  input1questao4: string = '';

  // Question 2
  input1questao5: string = '';

  // Question 2
  input1questao6: string = '';

  // Question 2
  input1questao7: string = '';

  // Question 2
  input1questao8: string = '';

  // Question 2
  input1questao9: string = '';

  // Question 2
  input1questao10: string = '';

  // Question 2
  input1questao11: string = '';

  // Question 2
  input1questao12: string = '';

  // Question 2
  input1questao13: string = '';

  // Question 2
  input1questao14: string = '';

  // Question 2
  input1questao15: string = '';

  openTips() {

    let content = 'Suas dicas acabaram';

    if (this.tips.length > 0) {
      content = this.tips[this.tipIndex];
      this.salvarParams(this.questionNumber, this.tipIndex);
    }

    const dialogRefTips = this.dialog.open(TipDialogComponent, {
      data: {
        title: this.titleTips,
        content: content
      }
    });

    dialogRefTips.afterClosed().subscribe(result => {
      this.tips.splice(this.tipIndex, 1);
      if (this.tips.length > 0) {
        this.tipIndex = Math.floor(Math.random() * this.tips.length);
        this.tip = this.tips[this.tipIndex];
      }
    });

    this.salvarParams(this.questionNumber, this.tipIndex);
  }

  nextQuestion() {

    switch (this.questionNumber) {
      case 0:
        if (this.input1questao1.toUpperCase() == "FRASE1" && this.input2questao1.toUpperCase() == "FRASE2") {
          this.questionNumber++;
          this.salvarResposta(this.questionNumber, [this.input1questao1, this.input2questao1]);
          this.salvarParams(this.questionNumber, this.tipIndex);
          this.resetTips();
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }

        break;
      case 1:
        if (this.input1questao2.toUpperCase() == "FRASE1") {
          this.questionNumber++;
          this.salvarResposta(this.questionNumber, [this.input1questao2, '']);
          this.salvarParams(this.questionNumber, this.tipIndex);
          this.resetTips();
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }
        break;
      case 2:
        if (this.input1questao3.toUpperCase() == "FRASE1") {
          this.questionNumber++;
          this.salvarResposta(this.questionNumber, [this.input1questao3, ''])
          this.resetTips();
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }
        break;
      case 3:
        if (this.input1questao4.toUpperCase() == "FRASE1") {
          this.questionNumber++;
          this.salvarResposta(this.questionNumber, [this.input1questao4, ''])
          this.resetTips();
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }
        break;
      case 4:
        if (this.input1questao5.toUpperCase() == "FRASE1") {
          this.questionNumber++;
          this.salvarResposta(this.questionNumber, [this.input1questao5, ''])
          this.resetTips();
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }
        break;
      case 5:
        if (this.input1questao6.toUpperCase() == "FRASE1") {
          this.questionNumber++;
          this.salvarResposta(this.questionNumber, [this.input1questao6, ''])
          this.resetTips();
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }
        break;
      case 6:
        if (this.input1questao7.toUpperCase() == "FRASE1") {
          this.questionNumber++;
          this.salvarResposta(this.questionNumber, [this.input1questao7, ''])
          this.resetTips();
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }
        break;
      case 7:
        if (this.input1questao8.toUpperCase() == "FRASE1") {
          this.questionNumber++;
          this.salvarResposta(this.questionNumber, [this.input1questao8, ''])
          this.resetTips();
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }
        break;
      case 8:
        if (this.input1questao9.toUpperCase() == "FRASE1") {
          this.questionNumber++;
          this.salvarResposta(this.questionNumber, [this.input1questao9, ''])
          this.resetTips();
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }
        break;
      case 9:
        if (this.input1questao10.toUpperCase() == "FRASE1") {
          this.questionNumber++;
          this.salvarResposta(this.questionNumber, [this.input1questao10, ''])
          this.resetTips();
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }
        break;
      case 10:
        if (this.input1questao11.toUpperCase() == "FRASE1") {
          this.questionNumber++;
          this.salvarResposta(this.questionNumber, [this.input1questao11, ''])
          this.resetTips();
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }
        break;
      case 11:
        if (this.input1questao12.toUpperCase() == "FRASE1") {
          this.questionNumber++;
          this.salvarResposta(this.questionNumber, [this.input1questao12, ''])
          this.resetTips();
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }
        break;
      case 12:
        if (this.input1questao13.toUpperCase() == "FRASE1") {
          this.questionNumber++;
          this.salvarResposta(this.questionNumber, [this.input1questao13, ''])
          this.resetTips();
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }
        break;
      case 13:
        if (this.input1questao14.toUpperCase() == "FRASE1") {
          this.questionNumber++;
          this.salvarResposta(this.questionNumber, [this.input1questao14, ''])
          this.resetTips();
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }
        break;
      case 14:
        if (this.input1questao15.toUpperCase() == "FRASE1") {
          this.questionNumber++;
          this.salvarResposta(this.questionNumber, [this.input1questao15, ''])
          this.resetTips();
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }
        break;
      default:
        //
        break;
    }
  }


  resetTips() {
    this.tips = allTips[this.questionNumber];
    this.tipIndex = 0;
  }

  isJsonEmpty(jsonObj: any) {
    return Object.keys(jsonObj).length === 0;
  }
}
