import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GenreComponent } from './components/pages/genre/genre.component';
import { CardComponent } from './components/card/card.component';
import { BackgroundComponent } from './components/pages/background/background.component';
import { CharacterComponent } from './components/pages/character/character.component';
import { HistoryComponent } from './components/pages/history/history.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GenreComponent,
    CardComponent,
    BackgroundComponent,
    CharacterComponent,
    HistoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
