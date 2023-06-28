import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InitialComponent} from "./pages/initial/initial.component";
import {GameComponent} from "./pages/game/game.component";
import {HistoryComponent} from "./pages/history/history.component";
import {PhotoComponent} from "./pages/photo/photo.component";
import {VideoComponent} from "./pages/video/video.component";

const routes: Routes = [
  { path: '', redirectTo: 'initial', pathMatch: 'full'},
  {path: 'initial', component: InitialComponent},
  {path: 'game', component: GameComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'photo', component: PhotoComponent},
  {path: 'video', component: VideoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
