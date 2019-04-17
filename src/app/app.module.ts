import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';

import { HighlightModule } from 'ngx-highlightjs';

import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import { AddressComponent } from './address/address.component';
import { DobComponent } from './dob/dob.component';
import { EmailComponent } from './email/email.component';
import { CellnurComponent } from './cellnur/cellnur.component';
import { PasswordComponent } from './password/password.component';

export function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
    { name: 'javascript', func: javascript },
    { name: 'scss', func: scss },
    { name: 'xml', func: xml }
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddressComponent,
    DobComponent,
    EmailComponent,
    CellnurComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    HighlightModule.forRoot({ languages: hljsLanguages })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
