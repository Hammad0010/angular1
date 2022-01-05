import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IsbComponent } from './isb/isb.component';
import { KarComponent } from './kar/kar.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { LahoreComponent } from './lahore/lahore.component';
import { QuettaComponent } from './quetta/quetta.component';
import { GilgitComponent } from './gilgit/gilgit.component';
import { KashmirComponent } from './kashmir/kashmir.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewComponent } from './new/new.component';
import { ErrorComponent } from './error/error.component';




@NgModule({
  declarations: [
    AppComponent,
    IsbComponent,
    KarComponent,
    HomeComponent,
    ExploreComponent,
    LahoreComponent,
    QuettaComponent,
    GilgitComponent,
    KashmirComponent,
    AboutComponent,
    ContactComponent,
    NewComponent,
    ErrorComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
