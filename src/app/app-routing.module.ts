import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CarouselComponent} from "./components/carousel/carousel.component";
import {QuestionsComponent} from "./pages/questions/questions.component";
import {InitialComponent} from "./pages/initial/initial.component";

const routes: Routes = [
  { path: '', redirectTo: 'begin', pathMatch: 'full'},
  { path: 'begin', component: CarouselComponent},
  {path: 'initial', component: InitialComponent},
  { path: 'home', component: HomeComponent},
  { path: 'questions', component: QuestionsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
