import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './app.router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FetchResultService } from './common/service/fetchResults.service';
import { NeedAuthGuard } from './common/auth-helper/auth.guard';
import { FilterPipe } from './common/pipes/filterResults.pipe';

import { HomeComponent } from './modules/home/home.component';
import { MaterialModule } from './material.module';
import { TreeView } from './components/tree/tree.component';
import { ProfileDetail } from './components/profile/profile.component';
import { RatedPlayers } from './components/ratings/rating.component';
import { DialogContentDialog } from './components/dialog/dialog.component';
import { LoginComponent } from './modules/login/login.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TreeView,
    ProfileDetail,
    RatedPlayers,
    DialogContentDialog,
    FilterPipe,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [FetchResultService, NeedAuthGuard],
  entryComponents: [DialogContentDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
