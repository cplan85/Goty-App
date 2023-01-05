
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BarGraphHorizontalComponent } from './bar-graph-horizontal/bar-graph-horizontal.component';



@NgModule({
  declarations: [
    NavbarComponent,
    BarGraphHorizontalComponent
  ],
  exports: [
    NavbarComponent,
    BarGraphHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
