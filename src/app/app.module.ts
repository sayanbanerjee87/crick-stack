import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './app.router';

import { HomeComponent } from './modules/home/home.component';
import { MaterialModule } from './material.module';
import { ListOfPlayers } from './modules/players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListOfPlayers
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
