import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InitialComponent} from './pages/initial/initial.component';
import {HomeComponent} from './pages/home/home.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {CarouselComponent} from './components/carousel/carousel.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import { DialogComponent } from './components/dialog/dialog.component';
import {MatIconModule} from "@angular/material/icon";
import { QuestionsComponent } from './pages/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    HomeComponent,
    CarouselComponent,
    DialogComponent,
    QuestionsComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
