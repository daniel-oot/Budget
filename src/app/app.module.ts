import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { BiWeeklyComponent } from './bi-weekly/bi-weekly.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { PrimeIcons } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { PrimeTemplate } from 'primeng/api';
import { Button } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar'
import {StepperModule} from 'primeng/stepper';
import {ButtonModule} from 'primeng/button';


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
    AppRoutingModule,
    ToolbarModule,
    StepperModule,
    ButtonModule
  ],
  providers: [ 
    PrimeIcons,
    PrimeTemplate,
    PrimeNGConfig,
    Button
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
