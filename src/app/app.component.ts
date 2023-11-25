import { Component } from '@angular/core';
import { StoryTimeService } from './components/services/story-time.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  step: number = 0
  title = 'minha-historia';
  prompt: string = ''

  name: string = ''
  gender: string = ''
  genre: string = ''
  background: string = ''
  hero: string = ''
  supports = []
  story: any;
  loading: boolean;

  constructor(
     private storyTimeService: StoryTimeService,
     private toastService: ToastrService
     ){ }

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
    this.gender = e.gender
    this.name = e.name
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
    this.supports = e
    this.createPrompt()
  }

  createPrompt() {
    this.loading = true
    this.prompt = 'Crie uma história de ' + this.genre + ' infantil de um personagem ' + this.name + ' de genero ' + this.gender + ', sendo este(a) um(a) ' + this.hero + ' que se passa na localidade ' + this.background + ' e com os personagem auxiliar: ' + this.supports + '. Com titulo e 3 paragrafos pequenos'
    this.storyTimeService.createStory(this.prompt).subscribe((res)=>{
      this.story = res
      this.speak()
      this.loading = false
      this.nextStep()
    },err=>{
      this.toastService.error('Algo deu errado!')
      this.toastService.error('Tente novamente')
      this.step = 1
      this.loading = false
    })
  }

  speak() {
    var msg = new SpeechSynthesisUtterance()
    msg.text = this.story.titulo + this.story.paragrafo1 + this.story.paragrafo2 +this.story.paragrafo3
    console.log(msg.text)
    window.speechSynthesis.speak(msg)

  }
}