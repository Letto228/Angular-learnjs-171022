import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from '../carousel/carousel.module';

@NgModule({
  declarations: [
    PaginatorComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    CarouselModule
  ],
  exports: [
    PaginatorComponent,
  ]
})
export class PaginatorModule { }
