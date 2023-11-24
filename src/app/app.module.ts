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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './components/pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card'; 
import { GenderComponent } from './components/pages/gender/gender.component';
import { StoryTimeService} from './components/services/story-time.service';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { StepperModule } from './components/stepper/stepper.module';

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
    LoginComponent,
    GenderComponent,
    CadastroComponent,
  ],

  exports: [
    MatProgressSpinnerModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    ReactiveFormsModule,
    StepperModule,
    ToastrModule.forRoot({
       timeOut: 3000,
      positionClass: 'toast-top-center',
      closeButton: false,
      preventDuplicates: true,
      progressBar: true
    }),
  ],

  providers: [StoryTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }