import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'

import { HomeComponent } from './home/home.component';
import { WorldMapComponent } from './components/world-map/world-map.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorldMapComponent,
    CountryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
