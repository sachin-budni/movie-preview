import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TvListComponent } from './tv-list/tv-list.component';
import { LatestComponent } from './latest/latest.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  { path: 'popular', component: TvListComponent, data: { title: 'popular' } },
  { path: 'upcoming', component: TvListComponent, data: { title: 'upcoming' } },
  { path: 'latest', component: LatestComponent, data: { title: 'latest' } },
  { path: 'top-rated', component: TvListComponent, data: { title: 'top-rated' } },
  { path: 'now-playing', component: TvListComponent, data: { title: 'now-playing' } },

  { path: 'popular/:id', component: DetailsComponent },
  { path: 'upcoming/:id', component: DetailsComponent },
  { path: 'top-rated/:id', component: DetailsComponent },
  { path: 'now-playing/:id', component: DetailsComponent },

  { path: '', redirectTo: 'popular', pathMatch: 'full' },
  { path: '**', redirectTo: 'popular', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TvRoutingModule { }
