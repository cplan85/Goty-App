
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InitialComponent } from './pages/initial/initial.component';
import { GotyComponent } from './pages/goty/goty.component';


@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    GotyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
