import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApodComponent } from './apod/apod.component';

// Relative import from the current directory to your PC's file system
import { NgApodConfig } from '../../../config/ng-apod.config';

@NgModule({
  declarations: [
    AppComponent,
    ApodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    NgApodConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
