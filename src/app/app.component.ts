import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  step:number = 0
  title = 'minha-historia';
  name:string = ''

  genre:string = ''
  background:string = ''
  characters = []

  getName(name:string){
    this.name = name
  }

  nextStep(){
    this.step = this.step + 1
  }

  setStep(step:number){
    this.step = step
  }

  backStep(){
    this.step = this.step - 1
  }

  selectGenre(e:any){
    console.log('GENERO ESCOLHIDO: ', e)
    this.genre = e
    this.nextStep()
  }
}
