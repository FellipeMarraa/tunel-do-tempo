import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CarouselService} from "../../services/carousel.service";
import {DialogComponent} from "../../components/dialog/dialog.component";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
              private dialog: MatDialog,
              private carouselService: CarouselService) {

  }

  showRoles: any;
  begin: any;
  showButton: any;
  isQuestion: any;

  ngOnInit() {
    this.isQuestion = this.carouselService.setBegin(true);
    this.begin = this.carouselService.getBegin();
    this.showRoles = this.carouselService.getShowRoles();
    this.showButton = this.carouselService.getShowButton();

    console.log(this.begin);

  }

  ngOnDestroy(): void {
    this.carouselService.stopCarousel();
  }

  frase1: string = '';
  frase2: string = '';
  tips: string[] = [
    'Em algum lugar do apartamento está escondido as duas frases para conseguir acessar e seguir para a próxima etapa',
    'Já procurou na cozinha?',
    'Talvez dentro de uma sacola? Ou uma caixa?'
  ]
  tip: string = '';
  titleDialogTips: string = 'Dica';
  showErrorMessage: boolean = false;
  showTip: boolean = false;
  indexQuestion: number = 1;



  login() {
    if (this.frase1 === 'FRASE1' && this.frase2 === 'FRASE2'){
      this.indexQuestion++;
    }else{
      this.showErrorMessage = true;
    }
  }

  randomTips(){

    this.showTip = true;
    const randomIndex = Math.floor(Math.random() * this.tips.length);
    this.tip = this.tips[randomIndex];

    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: this.titleDialogTips,
        content: this.tip
      }
    });

  }

  titleDialogRoles: string = 'Regras';
  contentDialogRoles: string[] = [
    'Regra número 1: As respostas do jogo estão ocultas no apartamento, você precisará procurá-las.',
    'Regra número 2: No topo da tela haverá um ícone de lâmpada, isso indica que você poderá pedir dica de onde pode estar a resposta. As dicas são limitadas. ',
    'Regra número 3: O jogo só irá avançar para a próxima pergunta se você responder corretamente a pergunta na tela.',
    'Regra número 4: Algumas portas estão trancadas, considere isso como fases do jogo, à medida que você avançar, encontrará as chaves para abrir e avançar para o próximo nível.',
    'Regra número 5: A suíte é a fase final, não pule etapas, visto que todas as chaves funcionam para todas as portas.',
    'Regra número 6: Não saia procurando freneticamente pelo apartamento, isso pode fazer você encontrar itens que ainda não deveriam ser encontrados.',
    'Regra número 7: Siga as perguntas orientadoras de cada questão e pense antes de agir, pode economizar um bom tempo.',
    'Regra número 8: TODAS as respostas em formato de texto, deverão ser escritas em caixa alta e sem caracteres especiais (ascentos, cedilhas, etc).',
    'Regra número 9: TODAS as respostas em formato de datas, deverão ser respondidas pelo input de data na tela.',
    'Regra número 10: O jogo não é salvo localmente, então não atualize a página se não perderá todo o progresso.',
    'Regra número 11: Entregue-se ao game e divirta-se. A recompensa será gratificante para você.',
  ];

  backToRoles() {

    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: this.titleDialogRoles,
        content: this.contentDialogRoles
      }
    });

  }
}
