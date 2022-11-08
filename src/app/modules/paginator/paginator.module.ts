import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { PaginatorDirective } from 'src/app/shared/paginator/paginator.directive';

@NgModule({
  declarations: [
    PaginatorComponent,
    PaginatorDirective
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [
    PaginatorComponent,
    PaginatorDirective
  ]
})
export class PaginatorModule { }
