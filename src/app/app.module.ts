// Importing Liberaries, Modules and Components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Jsonp } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { OmdbService } from 'app/omdb.service';
import { MaterialModule } from 'app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from 'app/navbar/navbar.component';
import { MovielistComponent } from 'app/movielist/movielist.component';
import { EmitterService } from 'app/emitter.service';
import { LikeComponent } from 'app/like/like.component';
import { AppRoutingModule } from 'app/app-routing/app-routing.module';
// NgModule Metadata
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent, MovielistComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [OmdbService, Jsonp, EmitterService],
  bootstrap: [AppComponent]
})
// Exporting NgModule AppModule class
export class AppModule { }
