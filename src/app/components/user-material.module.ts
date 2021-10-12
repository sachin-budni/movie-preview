import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video/video.component';
import { VideoPipe } from '../pipes/video.pipe';
import { MatDialogModule } from '@angular/material/dialog';


const ANGULAR_MATERIAL = [
  MatDialogModule
]

@NgModule({
  declarations: [
    VideoComponent,
    VideoPipe
  ],
  imports: [
    CommonModule,
    ANGULAR_MATERIAL
  ],
  exports: [
    VideoComponent,
    VideoPipe
  ]
})
export class UserMaterialModule { }
