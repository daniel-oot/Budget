import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {AnimateOnScrollModule} from 'primeng/animateonscroll'



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
    ButtonModule,
    Button,
    FormsModule,
    InputGroupAddonModule,
    InputTextModule,
    InputGroupModule,
    DropdownModule,
    AnimateOnScrollModule,
    BrowserAnimationsModule
  ],
  providers: [ 
    PrimeIcons,
    PrimeTemplate,
    PrimeNGConfig,
   
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
