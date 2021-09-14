import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvListComponent } from './tv-list/tv-list.component';
import { TvRoutingModule } from './tv-routing.module';
import { TvComponent } from './tv/tv.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { DetailsComponent } from './details/details.component';
const MATERIAL_MODULE = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatExpansionModule
];


@NgModule({
  declarations: [TvListComponent, TvComponent, DetailsComponent],
  imports: [
    CommonModule,
    TvRoutingModule,
    MATERIAL_MODULE
  ]
})
export class TvModule { }
