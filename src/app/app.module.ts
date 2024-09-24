import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { BiWeeklyComponent } from './bi-weekly/bi-weekly.component';
import { WeeklyComponent } from './weekly/weekly.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MonthlyComponent,
    BiWeeklyComponent,
    WeeklyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
