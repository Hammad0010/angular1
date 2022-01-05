import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IsbComponent } from './isb/isb.component';
import { KarComponent } from './kar/kar.component';
import { ExploreComponent } from './explore/explore.component';
import { LahoreComponent } from './lahore/lahore.component';
import { QuettaComponent } from './quetta/quetta.component';
import { KashmirComponent } from './kashmir/kashmir.component';
import { GilgitComponent } from './gilgit/gilgit.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NewComponent } from './new/new.component';
import { ErrorComponent } from './error/error.component';




const routes: Routes = [
 
  {
    path:'no',
    component:NewComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'gilgit',
    component:GilgitComponent
  },
  {
    path:'islamabad',
    component:IsbComponent
  },
  {
    path:'karachi',
    component:KarComponent
  },
  {
    path:'explore',
    component:ExploreComponent
  },
  {
    path:'lahore',
    component:LahoreComponent
  },
  {
    path:'quetta',
    component:QuettaComponent
  },
  {
    path:'kashmir',
    component:KashmirComponent
  },
  { path: '**', component: ErrorComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
