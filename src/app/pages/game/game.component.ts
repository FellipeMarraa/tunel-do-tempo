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
  questionNumber: number = 1;
  tipIndex: number = 1;
  tip: any;
  tips: any = allTips[0];
  titleTips: string = 'Dica';

  // Question 1
  input1questao1: any = 'IMPLICANTE';
  input2questao1: any = 'NEOQEAV';

  // Question 2
  input1questao2: string = '27/07/2014';

  // Question 3
  input1questao3: string = '29/08/2014';

  // Question 4
  input1questao4: string = '13/10/2014';

  // Question 5
  input1questao5: string = 'CONHECEU MEUS PAIS';

  // Question 6
  input1questao6: string = 'GANHEI MINHA ALIANCA';
  input2questao6: string = '05/02/2015';

  // Question 7
  input1questao7: string = '12/02/2015';
  input2questao7: string = '7 MESES';

  // Question 8
  input1questao8: string = 'AMORZINHO, NENEM, BEBE, PAIXAUM, FE, VIDA';

  // Question 9
  input1questao9: string = 'FOMOS NO CIA';

  // Question 10
  input1questao10: string = 'PORQUE EU NUNCA VOU ESTAR SOZINHA';

  // Question 11
  input1questao11: string = 'CASAR';

  // Question 12
  input1questao12: string = 'VOCE CUIDA DE MIM, VOCE RI DAS MINHAS PIADAS SEM GRACA, VOCE ME ESCUTA CANTAR SEMPRE, VOCE SE PREOCUPA COMIGO';

  // Question 13
  input1questao13: string = 'VALE UM ALMOCO/JANTAR FEITO POR MIM, VALE EU REALIZAR UM DESEJO SEU, VALE UMA TARDE ESPECIAL, VALE UM SUPER ABRACO';

  // Question 14
  input1questao14: string = '2192, 313, 52608, 72, 6';

  // Question 15
  input1questao15: string = 'NOIVADO';
  input2questao15: string = 'ALIANCA';


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
      case 1:
        if ((this.input1questao1.toUpperCase().includes('IMPLICANTE') || this.input1questao1.toUpperCase().includes('BOCHECHUDO')) && this.input2questao1.toUpperCase().includes('NEOQEAV')) {
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
      case 2:
        if (this.input1questao2.toUpperCase().includes('27/07/2014')) {
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
      case 3:
        if (this.input1questao3.toUpperCase().includes('29/08/2014')) {
          this.questionNumber++;
          this.salvarResposta(this.questionNumber, [this.input1questao3, '']);
          this.salvarParams(this.questionNumber, this.tipIndex);
          this.resetTips();
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }
        break;
      case 4:
        if (this.input1questao4.toUpperCase().includes('13/10/2014')) {
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
      case 5:
        if (this.input1questao5.toUpperCase().includes('PAIS')) {
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
      case 6:
        if (this.input1questao6.toUpperCase().includes('ALIANCA') && this.input2questao6.toUpperCase().includes('05/02/2015')) {
          this.questionNumber++;
          this.salvarResposta(this.questionNumber, [this.input1questao6, this.input2questao6]);
          this.resetTips();
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }
        break;
      case 7:
        if (this.input1questao7.toUpperCase().includes('12/02/2015') && this.input2questao7.toUpperCase().includes('7 MESES')) {
          this.questionNumber++;
          this.salvarResposta(this.questionNumber, [this.input1questao7, this.input2questao7]);
          this.resetTips();
        } else {
          this.incorretAnswer = true;
          setTimeout(() => {
            this.incorretAnswer = false;
          }, 3000);
        }
        break;
      case 8:
        if (this.input1questao8.toUpperCase().includes('AMORZINHO, NENEM, BEBE, PAIXAUM, FE, VIDA')) {
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
      case 9:
        if (this.input1questao9.toUpperCase().includes('CIA')) {
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
      case 10:
        if (this.input1questao10.toUpperCase().includes('PORQUE EU NUNCA VOU ESTAR SOZINHA')) {
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
      case 11:
        if (this.input1questao11.toUpperCase().includes('CASAR')) {
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
      case 12:
        if (this.input1questao12.toUpperCase().includes('VOCE CUIDA DE MIM, VOCE RI DAS MINHAS PIADAS SEM GRACA, VOCE ME ESCUTA CANTAR SEMPRE, VOCE SE PREOCUPA COMIGO')) {
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
      case 13:
        if (this.input1questao13.toUpperCase().includes('VALE UM ALMOCO/JANTAR FEITO POR MIM, VALE EU REALIZAR UM DESEJO SEU, VALE UMA TARDE ESPECIAL, VALE UM SUPER ABRACO')) {
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
      case 14:
        if (this.input1questao14.toUpperCase().includes('2192, 313, 52608, 72, 6')) {
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
      case 15:
        if (this.input1questao15.toUpperCase().includes('NOIVADO') && this.input2questao15.toUpperCase().includes('ALIANCA')) {
          this.salvarResposta(this.questionNumber, [this.input1questao15, this.input2questao15]);
          this.dialogService.setShowVideo(true);
          this.router.navigate(['/video']);
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
