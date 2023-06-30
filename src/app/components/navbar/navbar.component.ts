import { Component } from '@angular/core';
import {RoleDialogComponent} from "../role-dialog/role-dialog.component";
import {Router} from "@angular/router";
import {DialogService} from "../../services/dialog.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router) {
  }

  goToMenu() {
    this.router.navigate(['/']);
  }

  goToPhoto() {
    this.router.navigate(['/photo']);
  }

  goToVideo() {
    this.router.navigate(['/video']);
  }

  protected readonly onclick = onclick;

}
