import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingsComponent } from './top-headings/top-headings.component';
import { HttpClientModule } from '@angular/common/http'
import { NewsRoomApiService } from './service/news-room-api.service';
import { TechnologyComponent } from './technology/technology.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadingsComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [NewsRoomApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
