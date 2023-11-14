import { Component } from '@angular/core';
import { StoryTimeService } from './components/services/story-time.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading: boolean;
  constructor(
    private storyTimeService: StoryTimeService,
    ) { }

  step: number = 0;
  title = 'minha-historia';
  prompt: Object = {};

  name: string = '';
  gender: string = '';
  genre: string = '';
  background: string = '';
  hero: string = '';
  supports = [];
  story

  getState() {
    // console.log(this.name, this.genre, this.gender, this.background, this.hero, this.supports)
  }

  nextStep() {
    this.step = this.step + 1;
  }

  setStep(step: number) {
    this.step = step;
  }

  backStep() {
    this.step = this.step - 1;
  }

  selectGender(e: any) {
    this.gender = e.event;
    this.name = e.name.name;
    this.step = this.step + 1;
  }

  selectGenre(e: any) {
    this.genre = e;
    this.nextStep();
  }

  selectBackground(e: any) {
    this.background = e;
    this.step = this.step + 1;
  }

  selectCharacter(e: any) {
    this.hero = e;
    this.step = this.step + 1;

    this.getState();
  }

  selectSuports(e: any) {
    for (let i = 0; i < e.length + 1; i++) {
      if (e[i]) {
        this.supports.push(e[i].role);
      }
    }
    this.step = this.step + 1;
    this.createPrompt();
  }

  createPrompt() {
    this.loading = false
    this.prompt = {
      message:
        'Crie uma história de ' +
        this.genre +
        ' infantil de um personagem ' +
        this.name +
        ' de genero ' +
        this.gender +
        ', sendo este(a) um(a) ' +
        this.hero +
        ' que se passa na localidade ' +
        this.background +
        ' e com os personagens: ' +
        this.supports +
        '. Com titulo e 3 paragrafos pequenos',
    };

    this.storyTimeService.createStory(this.prompt).subscribe((res)=>{
      this.loading = false
      this.story = res
    })

 
  }

  speak() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = this.gender;
    window.speechSynthesis.speak(msg);
  }
}



