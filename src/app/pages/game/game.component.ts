import {Component, OnInit, Renderer2} from '@angular/core';
import {DialogService} from "../../services/dialog.service";
import {RoleDialogComponent} from "../../components/role-dialog/role-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit{
  incorretAnswer: any = false;

  constructor(private renderer: Renderer2,
              private dialogService: DialogService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.dialogService.setInicialPage(false);
    this.dialogService.setPaginaAtual(2);
    this.renderer.setStyle(document.body, 'background-image', 'url(./assets/background-initial.png)');
    // this.renderer.setStyle(document.body, 'background-repeat', 'no-repeat');
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

  openTips() {

  }
}
