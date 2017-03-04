import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AttrDirectiveComponent } from './attr-directive/attr-directive.component';
import {HighlightDirective} from "./attr-directive/highlight.directive";

@NgModule({
  declarations: [
    AppComponent,
    AttrDirectiveComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
