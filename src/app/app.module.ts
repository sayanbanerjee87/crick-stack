import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './app.router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HomeComponent } from './modules/home/home.component';
import { MaterialModule } from './material.module';
import { TreeView } from './components/tree/tree.component';
import { ProfileDetail } from './components/profile/profile.component';
import { RatedPlayers } from './components/ratings/rating.component';
import { DialogContentDialog } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TreeView,
    ProfileDetail,
    RatedPlayers,
    DialogContentDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  entryComponents: [DialogContentDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
