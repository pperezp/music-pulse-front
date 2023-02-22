import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ArtistComponent } from './artist/artist.component';
import {VideosComponent} from "./videos/videos.component";

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'artist/:id',
    component: ArtistComponent
  },
  {
    path: 'artist/:id/videos',
    component: VideosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
