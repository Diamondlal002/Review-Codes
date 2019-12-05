import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { freeApiService } from './services/freeapi.service';
import { RouterModule, Routes } from '@angular/router';
import { OutputpageComponent } from "./outputpage/outputpage.component";
import { PageComponent } from "./page/PageComponent";


const appRoutes: Routes = [  

  {
    path: 'outputpage/:id',
    component: OutputpageComponent,
  },

  {
    path: 'page',
    component: PageComponent,
  },

];

@NgModule({
  declarations: [
    AppComponent,
  
  OutputpageComponent,
  PageComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
     
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
