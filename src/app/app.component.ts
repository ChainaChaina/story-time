import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  step: number = 4
  title = 'minha-historia';
  prompt: string = ''

  name: string = ''
  gender: string = ''
  genre: string = ''
  background: string = ''
  hero: string = ''
  supports = []

  getState() {
    // console.log(this.name, this.genre, this.gender, this.background, this.hero, this.supports)
  }

  nextStep() {
    this.step = this.step + 1
  }

  setStep(step: number) {
    this.step = step
  }

  backStep() {
    this.step = this.step - 1
  }

  selectGender(e: any) {
    this.gender = e.event
    this.name = e.name.name
    this.step = this.step + 1
  }

  selectGenre(e: any) {
    this.genre = e
    this.nextStep()
  }

  selectBackground(e: any) {
    this.background = e
    this.step = this.step + 1
  }

  selectCharacter(e: any) {
    this.hero = e
    this.step = this.step + 1

    this.getState()
  }

  selectSuports(e: any) {

    for (let i = 0; i < e.length + 1; i++) {
      if (e[i]) {
        this.supports.push(e[i].role)
      }
    }
    this.step = this.step + 1
    this.createPrompt()
  }

  createPrompt() {
    this.prompt = 'Crie uma história de ' + this.genre + ' infantil de um personagem ' + this.name + ' de genero ' + this.gender + ', sendo este(a) um(a) ' + this.hero + ' que se passa na localidade ' + this.background + ' e com os personagens: ' + this.supports + '. Com titulo e 3 paragrafos pequenos'
    console.log(this.prompt)
    this.speak()
  }

  speak() {
    var msg = new SpeechSynthesisUtterance()
    msg.text = this.prompt
    window.speechSynthesis.speak(msg)
    // console.log('rodei')
    // let text = this.prompt
    // // Create a new SpeechSynthesisUtterance object
    // let utterance = new SpeechSynthesisUtterance();
    // // Set the text and voice of the utterance
    // utterance.text = text;
    // utterance.voice = window.speechSynthesis.getVoices()[0];
    // // Speak the utterance
    // window.speechSynthesis.speak(utterance);
  }
}



