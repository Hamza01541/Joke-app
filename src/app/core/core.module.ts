import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JokeService } from './services';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  exports: [],
  declarations: [],
  providers: [JokeService]
})
export class CoreModule { }
