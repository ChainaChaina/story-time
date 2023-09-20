import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  step:number = 1
  title = 'minha-historia';

  genre:string = ''
  background:string = ''
  characters = []

  selectGenre(e:any){
    console.log('GENERO ESCOLHIDO: ', e)
    this.genre = e
    this.step = this.step + 1
  }
}
