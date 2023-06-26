import {Component, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogComponent} from "../../components/dialog/dialog.component";
import {DialogService} from "../../services/dialog.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(private router: Router,
              private dialog: MatDialog,
              private dialogDataService: DialogService) {

  }

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
  showRoles: boolean = true;
  showTip: boolean = false;

  login() {
    if (this.frase1 === 'FRASE1' && this.frase2 === 'FRASE2'){
      this.router.navigate(['/home']);
    }else{
      this.showErrorMessage = true;
    }
  }

  goNextStep() {
    this.showErrorMessage = false;
    this.showRoles = false;
  }

  backToRoles() {
    this.showErrorMessage = false;
    this.showRoles = true;
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
}
