import {Component, OnInit, Renderer2} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {RoleDialogComponent} from "../../components/role-dialog/role-dialog.component";
import {DialogService} from "../../services/dialog.service";

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit{

  constructor(private router: Router,
              private renderer: Renderer2,
              private dialog: MatDialog,
              private dialogService: DialogService) {
  }


    ngOnInit() {
      this.renderer.setStyle(document.body, 'background-image', 'url(./assets/background-initial.png)');
      this.renderer.setStyle(document.body, 'background-repeat', 'no-repeat');
      this.renderer.setStyle(document.body, 'background-size', 'cover');
  }

  startGame() {
    this.router.navigate(['/game']);
  }

  ourHistory() {
    this.router.navigate(['/history']);
  }

  goPhotos() {
    this.router.navigate(['/photo']);
  }

  goVideos() {
    this.router.navigate(['/video']);
  }

  roles() {

    this.dialogService.setInicialPage(true);

    const dialogRef = this.dialog.open(RoleDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
