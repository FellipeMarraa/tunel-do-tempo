import {Component, HostBinding, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";
import {DialogService} from "../../services/dialog.service";

@Component({
  selector: 'app-role-dialog',
  templateUrl: './role-dialog.component.html',
  styleUrls: ['./role-dialog.component.scss']
})
export class RoleDialogComponent implements OnInit{

  isInitialPage: any;

  constructor(private router: Router,
              private dialogService: DialogService) {
  }

  ngOnInit() {
    this.paginaAtual = this.dialogService.getPaginaAtual();
    this.isInitialPage = this.dialogService.getIsInicialPage();
  }

  paginaAtual: number = 1;

  goNextPage() {
    this.paginaAtual++;
  }

  backwardPage() {
    this.paginaAtual--;
  }

  startGame() {
    this.router.navigate(['/game'])
  }
}
