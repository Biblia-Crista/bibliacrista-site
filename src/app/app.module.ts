import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MainComponent } from './main/main.component';
import { InfoComponent } from './info/info.component';
import { ScreensComponent } from './screens/screens.component';
import { Download1Component } from './download1/download1.component';
import { FeaturesComponent } from './features/features.component';
import { Download2Component } from './download2/download2.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainComponent,
    InfoComponent,
    ScreensComponent,
    Download1Component,
    FeaturesComponent,
    Download2Component,
    SocialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
