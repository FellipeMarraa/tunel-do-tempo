import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InitialComponent} from './pages/initial/initial.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {CarouselComponent} from './components/carousel/carousel.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import { PhotoComponent } from './pages/photo/photo.component';
import { VideoComponent } from './pages/video/video.component';
import { GameComponent } from './pages/game/game.component';
import { HistoryComponent } from './pages/history/history.component';
import { RoleDialogComponent } from './components/role-dialog/role-dialog.component';
import { TipDialogComponent } from './components/tip-dialog/tip-dialog.component';
import {LocalStorageService} from "./services/local-storage.service";
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    CarouselComponent,
    PhotoComponent,
    VideoComponent,
    GameComponent,
    HistoryComponent,
    RoleDialogComponent,
    TipDialogComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
